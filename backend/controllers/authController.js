import jwt from 'jsonwebtoken';
import Employee from '../Models/employee.js';
import bcrypt from 'bcryptjs';

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const employee = await Employee.findOne({ email }).select('+password')
        // console.log(email);
        // console.log(password);
        if (!employee) {
            return res.status(404).json({
                success: false,
                message: 'employee not found'
            })
        }


        const isMatch = await bcrypt.compare(password, employee.password)
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: 'invalid password'
            })
        }
        const token = jwt.sign(
            { 
                id: employee._id, 
                email: employee.email 
            }, 
            process.env.JWT_SECRET, 
            { expiresIn: '1h' }
        );

        res.cookie('token', token, {
            httpOnly: true,
            expires: new Date(Date.now() + 3600000),
            secure: process.env.NODE_ENV === 'production'
        })

        res.status(200).json({
            status: true,
            message: 'Login successful',
            data: {
                token
            }
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'login failed',
            error: err.message
        })
    }
}

export { login }