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


const app = express();
const port = 3000;


app.use(express.json());

const MONGODB_URI = 'mongodb+srv://myFirstCluster:subinstha12@cluster0.0lqb2hr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const dbConnection = mongoose.connect(MONGODB_URI);

dbConnection.then(() => {
    console.log('connected to mongodb successfully')
}).catch((error) => {
    console.log('Error connecting mongodb:', error)
    process.exit(1)
})



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
