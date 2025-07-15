import express from 'express'
const router = express.Router()
// import Employee from '../Models/employee.js';
import { authenticateToken, roleMiddleware } from '../middleware/authMiddleware.js';
import {createEmployee, deleteEmployeeById, getEmployee, getEmployeeById, updateEmployeeById} from '../controllers/employeeControllers.js';
// import { isAdmin } from '../middleware/isAdminMiddleware.js';
import upload from '../utils/imageUpload.js';

router.post('/', [authenticateToken, roleMiddleware(['admin','manager'])], upload.single('profileImage'), createEmployee)
router.get('/', getEmployee)
router.get('/:id', getEmployeeById)
router.delete('/:id', deleteEmployeeById)
router.put('/:id', updateEmployeeById)

export default router;