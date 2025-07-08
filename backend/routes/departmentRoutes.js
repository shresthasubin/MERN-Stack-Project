import express from 'express'
import { createDepartment, deleteDepartmentById, getDepartment, getDepartmentById, updateDepartmentById } from '../controllers/departmentController.js'

const router_D = express.Router()

router_D.post('/', createDepartment)
router_D.get('/',getDepartment)
router_D.get('/:id', getDepartmentById)
router_D.put('/:id',updateDepartmentById)
router_D.delete('/:id',deleteDepartmentById)

export default router_D