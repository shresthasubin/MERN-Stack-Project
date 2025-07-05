import bcrypt from 'bcryptjs'
import Employee from "../Models/employee.js";

const createEmployee = async(req, res) => {
    try {
        const employee = new Employee(req.body);
        const hashedPassword = await bcrypt.hash(employee.password,10);
        employee.password = hashedPassword
        const savedEmployee = await employee.save();

        res.status(201).json({
            success: true,
            message: 'Employee created successfully',
            data: savedEmployee
        });
    } catch (error) {
        console.error('Error creating employee:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
}




const getEmployee = async(req, res) => {
    try{
        const employees = await Employee.find();
        res.status(201).json({
            success: true,
            message: 'employee retrieved successfully',
            data: employees
        })

    } catch (err) {
        console.log('Error: ',err.message)
        res.status(500).json({
            success: false,
            message: 'failed to retrieved',
            error: err.message
        })
    }
}


const getEmployeeById = async (req, res) => {
    const { id } = req.params;
    try {
        const employee = await Employee.findById(id);
        if (!employee) {
            res.status(404).json({
                success: false,
                message: 'cannot find the employee with id'
            })
        }
        res.status(201).json({
            success: true,
            message: 'Employee retrieved successfully',
            data: employee
        })

    } catch (err) {
        console.log('Error: ', err.status)
        res.status(500).json({
            success: false,
            message: 'Employee cannot be retrieved',
            error: err.message
        })
    }
}

const deleteEmployeeById = async(req, res) => {
    const { id }=req.params;
    try {
        await Employee.findByIdAndDelete(id)
        
        res.status(200).json({
            success: true,
            message: 'employee deleted successfully',
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'cannot delete id'
        })
    }
}

const updateEmployeeById = async (req, res) => {
    const { id } = req.params;


    try {
        const employee = await Employee.findByIdAndUpdate(id, req.body,{new: true, runValidators: true})
        if(! employee) {
            res.status(404).json({
                success: true,
                message: 'Employee not found'
            })
        }

        res.status(200).json({
            success: true,
            message: 'employee updated successfully',
            data: employee
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'cannot update id'
        })
    }
}
export { createEmployee, getEmployee, getEmployeeById, deleteEmployeeById, updateEmployeeById }



















// practice---------------------------------------------------


// import Employee from "../Models/employee.js";

// const createEmployee2 = async((req, res) => {
//     try {
//         const employee = new Employee(req.body)
//         const employeeSaved = employee.save
//         res.status(201).json({
//             success: true,
//             message:'connected successfully',
//             data: employeeSaved
//         })
//     } catch (err) {
//         console.log("Error: ", err)
//         res.status(500).json({
//             success: false,
//             message: 'cannot fetched data',
//             error: err.message
//         })
//     }
// })


// import Employee from '../Models/employee.js'

// const createEmployee3 = async((req, res) => {
//     try{
//         const employee = new Employee(req.body)
//         const employeeSaved = employee.save()
//         res.status(201).json({
//             success: false,
//             message: 'Cannot connected to database',
//             data: employeeSaved
//         })
//     }catch (err) {
//         console.log("Error: ",err.message)
//         res.status(500).json({
//             success: false,
//             message: "Cannot connect to database",
//             error: err.message
//         })
//     }
// })


// import Employee from '../Models/employee.js'

// const createEmployee5 = async(req, res) => {
//     try{
//         const employee = new Employee(req.body)
//         const employeeSaved = employee.save()

//         res.status(201).json({
//             success: true,
//             message: 'connected to database successfully',
//             data: employeeSaved
//         })
//     } catch (err) {
//         console.log('Error: ', err.message)
//         res.status(500).json({
//             success: false,
//             message: 'Cannot connect to database successfully',
//             error: err.message
//         })
//     }
// }


// import Employee from '../Models/employee.js';
// import bcrypt from 'bcryptjs';

// const createEmployee1 = async(req, res) => {
//     try {
//         const employee = new Employee(req.body);
//         const hashedPassword = await bcrypt.hash(employee.password, 10)
//         employee.password = hashedPassword
//         const savedEmployees = employee.save()

//         res.status(201).json({
//             success: true,
//             message: 'Successfully connected to database',
//             data: savedEmployees
//         })
//     } catch (err) {
//         console.log('ERror: ', err.status)
//         res.status(500).json({
//             success: false,
//             message: 'Cannot connect to database',
//             error: err.message
//         })
//     }
// }

// const getEmployee1 = async (req, res) => {
//     try {
//         const retrievedEmployee = await Employee.find()
//         res.status(201).json({
//             success: true,
//             message: 'Data retrieved successfully',
//             data: retrievedEmployee
//         })
        
//     } catch (err) {
//         console.log('Error: ', err.status)
//         res.status(500).json({
//             success: false,
//             message: 'cannot retrieve info',
//             error: err.message
//         })
//     }
// }

// export {createEmployee1, getEmployee1}