import express from 'express'
import { createPayroll, deletePayroll, getPayroll, getPayrollById, updatePayroll } from '../controllers/payrollControllers.js'

const router_P = express.Router()

router_P.post('/',createPayroll)
router_P.get('/',getPayroll)
router_P.get('/',getPayrollById)
router_P.put('/',updatePayroll)
router_P.delete('/',deletePayroll)

export default router_P