import express from 'express'
import { createAttendance, deleteAttendance, getAttendance, getAttendanceById, updateAttendance } from '../controllers/attendanceControllers'

const router = express.Router()
router.post('/',createAttendance)
router.get('/',getAttendance)
router.get('/:id',getAttendanceById)
router.put('/:id',updateAttendance)
router.delete('/:id',deleteAttendance)

export default router