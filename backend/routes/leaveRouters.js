import express from 'express'
import { createLeave, deleteLeave, getLeave, getLeaveById, updateLeave } from '../controllers/leaveControllers.js'

const router_L = express.Router()

router_L.post('/',createLeave)
router_L.get('/',getLeave)
router_L.get('/',getLeaveById)
router_L.put('/',updateLeave)
router_L.delete('/',deleteLeave)


export default router_L