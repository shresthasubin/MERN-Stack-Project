import jwt from "jsonwebtoken";
import Employee from "../Models/employee.js";

const isAdmin = async (req, res, next) => {
    try {
        const token = req.cookies.token
        if(! token) {
            return res.status(401).json({
                status: false,
                message: 'failed to add employee, token not found'
            })
        }
        const decoded = jwt.verify(token, 'a-string-secret-at-least-256-bits-long')
        req.employee = await Employee.findById(decoded.id).select('-password');
        console.log(req.employee)
        if (req.employee.role != "admin") {
            return res.status(401).json({
                status: false,
                message: 'failed to add employee, must be admin'
            })
        }
        next()

    } catch (err) {
        console.log(err.message)
        res.status(401).json({
            success: false,
            message: 'Should be admin to add employee'
        })
    }
}


export { isAdmin }