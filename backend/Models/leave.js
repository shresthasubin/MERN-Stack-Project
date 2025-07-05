import mongoose from 'mongoose'

const leaveSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee'
    },
    type: {
        type: String,
        enum: ['sick', 'casual', 'earned'],
        lowercase: true,
        required: true,
        trim: true
    },
    dateFrom: {
        type: Date,
        required: true,
    },
    dateTo: {
        type: Date,
        required: true,
    },
    reason: {
        type: String,
        trim: true
    },
    status: {
        type: String,
        lowercase: true,
        enum: ['pending', 'approved', 'rejected'],
        trim: true
    }
}, {timestamps: true})

const Leave = mongoose.model('Leave', leaveSchema)
export default Leave