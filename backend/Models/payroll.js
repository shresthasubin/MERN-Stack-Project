import mongoose from 'mongoose'

const payrollSchema = mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true,
        trim: true
    },
    month: {
        type: String,
        required: true,
        trim: true
    },
    year: {
        type: Number,
        required: true,
    },
    basicSalary: {
        type: Number,
        required: true,
    },
    totalSalary: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ['pending', 'paid'],
        lowercase: true
    }
}, {timestamps: true})

const Payroll = mongoose.model('Payroll', payrollSchema)
export default Payroll