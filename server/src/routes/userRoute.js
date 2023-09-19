import express from "express";
import {
  addToPlayList,
  changePassword,
  changeProfile,
  deleteFromPlayList,
  forgetPassword,
  getMyProfile,
  login,
  logout,
  register,
  resetPassword,
} from "../controllers/userController.js";
import { isAuthenticate } from "../middlewares/auth.js";

const userRoute = express.Router();

userRoute.route("/register").post(register);

userRoute.route("/login").post(login);

userRoute.route("/logout").get(logout);

userRoute.route("/me").get(isAuthenticate, getMyProfile);

userRoute.route("/password/change").put(isAuthenticate, changePassword);

userRoute.route("/me/update").put(isAuthenticate, changeProfile);

userRoute.route("/password/forget").post(forgetPassword);

userRoute.route("/password/reset/:token").put(resetPassword);

userRoute.route("/addtoplaylist").post(isAuthenticate,addToPlayList);

userRoute.route("/deletefromplaylist").delete(isAuthenticate,deleteFromPlayList);

export default userRoute;
