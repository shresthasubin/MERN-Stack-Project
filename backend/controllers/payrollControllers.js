import Payroll from "../Models/payroll.js";

const createPayroll = async(req, res) => {
    try {
        const payroll = new Payroll(req.body)
        const savedPayroll = payroll.save()
        res.status(201).json({
            success: true,
            message: 'data saved successfully'
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'cannot save data',
            error: err.message
        })
    }
}

const getPayroll = async (req, res) => {
    try {
        const payroll = Payroll.find()
        res.status(201).json({
            success: true,
            message: 'data retrieved successfully'
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'data cannot be retrieved',
            error: err.message
        })
    }
}

const getPayrollById = async(req, res) => {
    try {
        const {id} = req.params
        const payroll = Payroll.findById(id)
        if(! payroll) {
            res.status(404).json({
                success: false,
                message: 'cannot find id'
            })
        }
        res.status(201).json({
            success: true,
            message: 'data retrieved successfully'
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'cannot get data',
            error: err.message
        })
    }
}


const deletePayroll = async(req, res) => {
    try {
        const {id} = req.params
        const payroll = Payroll.findByIdAndDelete(id)
        if(! payroll) {
            res.status(404).json({
                success: false,
                message: 'cannot find id'
            })
        }
        res.status(201).json({
            success: true,
            message: 'data deleted successfully'
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'cannot delete data'
        })
    }
}

const updatePayroll = async(req, res) => {
    try {
        const {id} = req.params
        const payroll = Payroll.findByIdAndUpdate(id, req.body, {new: true, runValidators: true})
        if(! payroll) {
            res.status(404).json({
                success: false,
                message: 'cannot find id'
            })
        }
        res.status(201).json({
            success: true,
            message: 'data updated successfully'
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'cannot update data',
            error: err.message
        })
    }
}

export {createPayroll, getPayroll, getPayrollById, deletePayroll, updatePayroll}