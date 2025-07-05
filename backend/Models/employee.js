import {mongoose} from 'mongoose';

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required:true,
        unique: true,
        lowercase: true,
        trim:true,
        match: [/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/,'please fill a valid email address']
    }, 
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
    },
    role: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        enum: ['admin', 'manager', 'employee']
    },
    dept: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department'
    },
    salary: {
        type: Number
    }
}, {timestamps: true});

const Employee = mongoose.model('Employee',employeeSchema)
export default Employee;