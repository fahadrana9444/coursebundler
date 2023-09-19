import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import Course from "../models/courseModel.js";
import Errorhandler from "../utils/errorHandler.js";

export const getAllCourse = catchAsyncError(async (req, res, next) => {
  const course = await Course.find().select("-lectures")
  res.status(200).json({
    success: true,
    course,
  });
});

export const createCourse = catchAsyncError(async (req, res, next) => {
  const { title, description, category, createdBy } = req.body;

  if (!title || !description || !category || !createdBy) {
    return next(new Errorhandler("Please Enter All Fields", 400));
  }

  const file = req.file;

  await Course.create({
    title,
    description,
    category,
    createdBy,
    poster: {
      public_id: "temp",
      url: "temp",
    },
  });
  res.status(201).json({
    success: true,
    message: "Course Created Successfully",
  });
});


