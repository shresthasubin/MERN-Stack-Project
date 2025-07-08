import Attendance from "../Models/attendance.js";

const createAttendance = async(req, res) => {
    try {
        const attendance = new Attendance(req.body)
        const savedAttendance = attendance.save()

        res.status(201).json({
            success: true,
            message: 'data saved successfully'
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Cannot retrieve data'
        })
    }
}

const getAttendance = async(req, res) => {
    try {
        const attendance = Attendance.find()
        res.status(201).json({
            success: true,
            message: 'data fetched successfully'
        })
    } catch (err) {
        req.status(500).json({
            success: false,
            message: 'cannot retrieve data'
        })
    }
}

const getAttendanceById = async (req, res) => {
    try {
        const { id } = req.params
        const attendance = Attendance.findById(id)
        if( ! attendance) {
            res.status(404).json({
                success: false,
                message: 'cannot found id'
            })
        }
        res.status(201).json({
            success: true,
            message: 'Successfully retrieved attendance'
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Cannot retrieved data'
        })
    }
}

const deleteAttendance = async(req, res) => {
    try {
        const {id} = req. params
        const dltAttendance = Attendance.findByIdAndDelete(id)

        if (! dltAttendance) {
            res.status(404).json({
                success: false,
                message: 'cannot find data with id'
            })
        }
        res.status(201).json({
            success: true,
            message: 'attendance deleted successfully'
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'cannot delete data',
            error: err.message
        })
    }
}


const updateAttendance = async(req, res) => {
    try {
        const {id} = req.params
        const uptAttendance = Attendance.findByIdAndUpdate(id, req.body, {new: true, runValidators: true})

        if(!uptAttendance) {
            res.status(404).json({
                success: false,
                message: 'cannot find id'
            })
        }
        res.status(201).json({
            success: true,
            message: 'Attendance updated successfully'
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Cannot update attendance",
            error: err.message
        })
    }
}


export {createAttendance, getAttendance, getAttendanceById, updateAttendance, deleteAttendance}