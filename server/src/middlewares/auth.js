import jwt from 'jsonwebtoken'
import { catchAsyncError } from './catchAsyncError.js'
import Errorhandler from '../utils/errorHandler.js';
import User from '../models/userModel.js';
export const isAuthenticate = catchAsyncError(async(req,res,next)=>{
const {token} = req.cookies;
if(!token){
    return(next(new Errorhandler("Not logged in",401)))
    
}
const decoded = jwt.verify(token , process.env.JWT_SECRET)
    req.user = await User.findById(decoded.id)
    next()
})
