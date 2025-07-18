import jwt from 'jsonwebtoken'
import Employee from '../Models/employee.js'

const authenticateToken = async (req, res, next) => {
    try {
        const token = req.cookies.token
        if(!token) {
            return res.status(401).json({
                status: false,
                message: 'unauthorized, token not found'
            })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.employee = await Employee.findById(decoded.id).select("-password");
        next()
    } catch (err) {
        console.log(err.message)
        res.status(401).json({
            status: false,
            message: 'Unauthorized'
        })
    }
}

const roleMiddleware = (role) => {
    return (req, res, next) => {
        if (!role.includes(req.employee.role)) {
            return res.status(401).json({
                status: false,
                message: 'unauthorized, employee are not allowed to add another employee'
            })
        }
        next()
    }
}
export { authenticateToken, roleMiddleware }