import express from 'express'
import { createCourse, getAllCourse } from '../controllers/courseController.js'

const courseRoute = express.Router()

courseRoute.route('/course').get(getAllCourse)
courseRoute.route('/admin/course/create').post(createCourse)

export default courseRoute  