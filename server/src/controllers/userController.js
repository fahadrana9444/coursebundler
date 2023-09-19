import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import sendEmail from "../middlewares/sendMail.js";
import User from "../models/userModel.js";
import Errorhandler from "../utils/errorHandler.js";
import { sendToken } from "../utils/sendToken.js";
import crypto from "crypto";
import Course from "./../models/courseModel.js";

export const register = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;

  // const file = req.file

  if (!name || !email || !password) {
    return next(new Errorhandler("Please enter all fields", 400));
  }

  let user = await User.findOne({ email });
  if (user) {
    return next(new Errorhandler("User already exist", 409));
  } else {
    user = await User.create({
      name,
      email,
      password,
      avatar: {
        public_id: "temp",
        url: "temp",
      },
    });
  }
  sendToken(res, user, "Register Successfully", 201);
});

export const login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new Errorhandler("Please Enter Email and Password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new Errorhandler("User Not exist", 401));
  }

  const isMatched = await user.comparePassword(password);

  if (!isMatched) {
    return next(new Errorhandler("Wrong Email Password", 401));
  }

  sendToken(res, user, `Welcome Back ${user.name}`, 200);
});

export const logout = catchAsyncError(async (req, res, next) => {
  res
    .status(200)
    .cookie("token", null, {
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "Logout Successfully",
    });
});

export const getMyProfile = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  res.status(200).json({
    success: true,
    user,
  });
});

export const changePassword = catchAsyncError(async (req, res, next) => {
  const { newPassword, oldPassword } = req.body;
  if (!newPassword || !oldPassword) {
    return next(new Errorhandler("Please Enter required fields", 401));
  }
  const user = await User.findById(req.user._id).select("+password");

  const isMatched = await user.comparePassword(oldPassword);

  if (!isMatched) {
    return next(new Errorhandler("Please Enter Correct Password", 401));
  }
  user.password = newPassword;

  await user.save();

  res.status(200).json({
    success: true,
    message: "Password updated",
  });
});

export const changeProfile = catchAsyncError(async (re, res, next) => {
  const user = await User.findById(req.user._id);
  const { name, email } = req.body;
  if (!name || !email) {
    return next(new Errorhandler("Please Enter name and email", 400));
  }

  user.name = name;
  user.email = email;

  await user.save();

  res.status(200).json({
    success: true,
    message: "Name and Password is updated Successfully",
  });
});

export const updatePicture = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  res.status(200).json({
    success: true,
    message: "profile picture updated successfully",
  });
});

export const forgetPassword = catchAsyncError(async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return next(new Errorhandler("User not found", 400));
  }

  const restToken = await user.getResetToken();
  const url = `${process.env.FRONTEND_URL}/password/reset${restToken}`;
  const message = `click on link to reset password ${url}`;
  await sendEmail(user.email, "Reset Password", message);
  res.status(200).json({
    success: true,
    message: "Mail Send Successfully",
  });
});

export const resetPassword = catchAsyncError(async (req, res, next) => {
  const { token } = req.params;
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");
  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: {
      $gt: Date.now(),
    },
  });
  if (!user) {
    return next(new Errorhandler("Token Expired"));
  }
  (user.password = password), (user.resetPasswordToken = undefined);
  user.resetPasswordExpire = undefined;

  await user.save();

  res.status(200).json({
    success: true,
    message: "password change successfully",
  });
});

export const addToPlayList = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  const course = await Course.findById(req.query.id);

  if (!course) return next(new Errorhandler("Invalid Course Id", 400));

  const newPlaylist = user.playlist.filter((item) => {
    if (item.course.toString() !== course._id.toString()) {
      return item;
    }
  });

  user.playlist = newPlaylist;

  await user.save();

  res.status(200).json({
    success: true,
    message: "Add to playlist successfully",
  });
});

export const deleteFromPlayList = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  const course = await Course.findById(req.query.id);

  if (!course) return next(new Errorhandler("Invalid Course Id", 400));

  const item = user.playlist.find((item) => {
    if (item.course.toString() === course._id.toString()) {
      return true;
    }
  });

  await user.save();
  res.status(200).json({
    success: true,
    message: "Delete from playlist successfully",
  });
});
