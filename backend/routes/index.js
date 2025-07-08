import express from 'express'
import employeeRoutes from './employeeRoutes.js'
import authRoutes from './authRoutes.js'
import attendanceRoutes from './attendanceRouters.js'
import departmentRoutes from './departmentRoutes.js'
import leaveRoutes from './leaveRouters.js'
import payrollRoutes from './payrollRouters.js'

const router = express.Router()

router.use('/employee',employeeRoutes)
router.use('/auth',authRoutes)
router.use('/attendance',attendanceRoutes)
router.use('/department',departmentRoutes)
router.use('/leave',leaveRoutes)
router.use('/payroll',payrollRoutes)

export default router