// const express = require('express');

// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//     res.send('Hello world!')
// })

// app.listen(port, () => {
//     console.log(`backend server is running at http://localhost:${port}`)
// })
// import Employee from './Models/employee.js'
import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/index.js';
import cookieParser from 'cookie-parser';
import Employee from './Models/employee.js';
import bcrypt from 'bcryptjs';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
const port = process.env.PORT || 3000;

dotenv.config({
    path: '/.env'
})
app.use(cors({
    origin: '*',
    credential: true
}))
app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static("uploads/"))
const MONGODB_URI = process.env.MONGODB_URI

const dbConnection = mongoose.connect(MONGODB_URI);

dbConnection.then(() => {
    console.log('connected to mongodb successfully')
    seedAdmin()
}).catch((error) => {
    console.log('Error connecting mongodb:', error)
    process.exit(1)
})

async function seedAdmin() {
    try {
        const admin = await Employee.findOne({email: 'admin@gmail.com'})
        if (!admin) {
            const hashedPassword = await bcrypt.hash('admin', 10);
            await Employee.create({
                name: 'Admin',
                email: 'admin@gmail.com',
                password: hashedPassword,
                role: 'admin',
                dept: "64d5c6aee9f6a9e78c7b1234"
            })
        }
    } catch (err) {
        console.log(err.message)
    }
}


app.use('/api',routes)
// app.post('/employee',async(req, res) => {
//     try {
//         const employee = new Employee(req.body);
//         const savedEmployee = await employee.save();

//         res.status(201).json({
//             success: true,
//             message: 'Employee created successfully',
//             data : savedEmployee
//         });
//     } catch (error) {
//         console.error('Error creating employee:', error);
//         res.status(500).json({
//             success: false,
//             message: 'Internal server error',
//             error: error.message
//         });
//     }
// })

// import emp from './routes/employeeRoutes.js'
// app.use('/employee', emp)

// import authRoutes from './routes/authRoutes.js'
// app.use('/auth', authRoutes)
// // import dep from './routes/departmentRoutes.js'
// // app.use('/employee', dep)

// import { authMiddleware } from './middleware/auth.js';
// app.get('/profile',authMiddleware, (req, res) => {
//     res.send('Profile')
// })

app.listen(port, () => {
    console.log(`Backend server is running at http://localhost:${port}`);
});
