import express from 'express'
const router = express.Router()
// import Employee from '../Models/employee.js';
import {createEmployee, deleteEmployeeById, getEmployee, getEmployeeById, updateEmployeeById} from '../controllers/employeeControllers.js';

router.post('/', createEmployee)
router.get('/', getEmployee)
router.get('/:id', getEmployeeById)
router.delete('/:id', deleteEmployeeById)
router.put('/:id', updateEmployeeById)

export default router;