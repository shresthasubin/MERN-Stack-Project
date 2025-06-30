import {mongoose} from 'mongoose';

const employeeSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
        trim: true
    },
    email: {
        type:String,
        required:true,
        unique: true,
        lowercase: true,
        trim:true
    }
});

const Employee = mongoose.model('Employee',employeeSchema)
export default Employee;