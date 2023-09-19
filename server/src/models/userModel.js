import mongoose from "mongoose";
import validator from "validator";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'
import crypto from 'crypto'
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    validate: validator.isEmail,
  },
  password: {
    type: String,
    required: [true, "Email is required"],
    minlength: [8, "Password should be greater than 8 character"],
    select: false,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  subscription: {
    id: String,
    status: String,
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  playlist: [
    {
      course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
      poster: {
        type: String,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  resetPasswordToken: String,
  resetPasswordExpire: String,
});
userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        return(
            next()
        )
    }
    this.password =  await bcrypt.hash(this.password ,10)
    next()

})
userSchema.methods.comparePassword =async function(password){
    return(
        await bcrypt.compare(password , this.password)
    )
}
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
};

userSchema.methods.getResetToken = function(){
  const restToken = crypto.randomBytes(20).toString('hex')
  crypto.createHash('sha256').update(restToken).digest('hex')
  this.resetPasswordToken = restToken
  this.resetPasswordExpire = Date.now()+15*60*1000
  return restToken
}

const User = mongoose.model("User", userSchema);

export default User;
