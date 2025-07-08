import Leave from "../Models/leave.js";

const createLeave = async(req, res) => {
    try {
        const leave = new Leave(req.body)
        const savedLeave = leave.save()
        res.status(201).json({
            success: true,
            message: 'data saved succssfully',
            data: savedLeave
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'cannot be converted create',
            error: err.messsage
        })
    }
}

const getLeave = async(req, res) => {
    try {
        const leave = Leave.find()
        res.status(201).json({
            success: true,
            message: 'retrieved successfully',
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'cannot retrieve data',
            error: err.message
        })
    }
}


const getLeaveById = async(req, res) => {
    try {
        const {id} = req.params
        const leave = Leave.findById(id)

        if (! leave) {
            res.status(404).json({
                success: false,
                message: 'cannot find id',
                error: err.message
            })
        }
        res.status(201).json({
            success: true,
            message: 'Data fetched successfully'
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'retrieve failed',
            error: err.message
        })
    }
}


const deleteLeave = async (req, res) => {
    try {
        const { id } = req.params
        const leave = Leave.findByIdAndDelete(id)

        if (!leave) {
            res.status(404).json({
                success: false,
                message: 'cannot find id',
                error: err.message
            })
        }
        res.status(201).json({
            success: true,
            message: 'Data fetched successfully'
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'retrieve failed',
            error: err.message
        })
    }
}

const updateLeave = async (req, res) => {
    try {
        const { id } = req.params
        const leave = Leave.findByIdAndUpdate(id, req.body, {new: true, runValidators: true})

        if (!leave) {
            res.status(404).json({
                success: false,
                message: 'cannot find id',
                error: err.message
            })
        }
        res.status(201).json({
            success: true,
            message: 'Data fetched successfully'
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'retrieve failed',
            error: err.message
        })
    }
}

export {createLeave, getLeave, getLeaveById, updateLeave, deleteLeave}