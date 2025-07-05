import Department from "../Models/department";


const createDepartment = async(req, res) => {
    try {
        const department = new Department(req.body);
        const savedDepartment = department.save()
    
        res.status(201).json({
            success: true,
            message: 'added successfully',
            data: savedDepartment
        })
    } catch (err) {
        console.log('Error: ', err.status)
        res.status(500).json({
            success: false,
            message: 'cannot added to the database',
            error: err.message
        })
    }
}

const getDepartment = async(req, res) => {
    try {
        const department = await Department.find()
        res.status(200).json({
            success: true,
            message: 'Department fetched successfully',
            data: department
        })
    } catch (err) {
        console.log(err.status)
        res.status(500).json({
            message: false,
            message: 'Data cannot be retrieved',
            error: err.message
        })
    }
}

const getDepartmentById = async(req, res) => {
    try {
        const { id } = req.params
        const department = await Department.findById(id)

        if(! department) {
            res.status(404).json({
                success: false,
                message: 'cannot found the data with id',
            })
        }

        res.status(201).json({
            success: true,
            message: 'data fetched successfully'
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'cannot fetch data',
            error: err.message
        })
    }
}


const deleteDepartmentById = async (req, res) => {
    try {
        const { id } = req.params
        const department_D = await Department.findByIdAndDelete(id)
        if (!department_D) {
            res.status(404).json({
                success: false,
                message: 'Cannot find department with id'
            })
        }

        res.status(201).json({
            success: true,
            message: 'Department deleted successfully'
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'cannot delete data',
            error: err.message
        })
    }
}


const updateDepartmentById = async (req, res) => {
    try {
        const { id } = req.params
        const department_U = await Department.findByIdAndUpdate(id, req.body, {new: true, runValidators: true})
        if (! department_U) {
            res.status(404).json({
                success: false,
                message: 'Cannot retrieve data'
            })
        }
        res.status(201).json({
            success: true,
            message: 'updated data successfully'
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'cannot retrieve data'
        })
    }
}

export {createDepartment, getDepartment, getDepartmentById, updateDepartmentById, deleteDepartmentById}