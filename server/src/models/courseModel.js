import mongoose from 'mongoose'

const courseSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, 'Title is Required'],
        minLength:[4 , 'title must be greater than 4 char'],
        maxLength:[80 , 'title should be less than 80 char'],
    },
    description:{
        type:String,
        required:[true, 'description is Required'],
        minLength:[20 , 'description must be greater than 4 char'],
    },
    lectures:[
        {
            title:{
                type:String,
                required:true,
            },
            description:{
                type:String,
                required:true,
            },
            video:{
                public_id:{
                    type:String,
                    required:true
                },
                url:{
                    type:String,
                    required:true
                }

            },
        },
    ],
    views:{
        type:String,
        default:0,
    },
    numOfVideos:{
        type:String,
        default:0,
    },
    category:{
        type:String,
        required:true,
    },
    createdBy:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default :Date.now(),
    },
})

const Course = mongoose.model('Course' , courseSchema)

export default Course