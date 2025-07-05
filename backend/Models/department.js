import mongoose from 'mongoose'

const departmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        enum: ['HR', 'Engineering', 'Marketing', 'Sales', 'Finance', 'IT Support'],
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    head: {
        type: String,
        required: true,
        trim: true,
    }
}, {timestamps: true})

const Department = mongoose.model('Department', departmentSchema)
export default Department