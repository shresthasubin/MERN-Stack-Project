import mongoose from 'mongoose'

const attendanceSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true,
        trim: true
    },
    date: {
        type: Date,
        required: true
    },
    clockIn: {
        type: Date,
        required: true
    },
    clockOut: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['present', 'absent', 'leave'],
        lowercase: true,
        default: 'absent',
        required: true
    }
}, {timestamps: true})


const Attendance = mongoose.model('Attendance', attendanceSchema)
export default Attendance