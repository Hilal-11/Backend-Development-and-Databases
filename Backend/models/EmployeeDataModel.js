const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    employee_name: {
        type: String,
        required: true,
        maxLength: 40
    },
    employee_email: {
        type: String,
        required: true,
        maxLength: 20
    },
    employee_id: {
        type: String,
        required: true,
        maxLength: 20,
    },
    employee_department: {
        type: String,
        required: true,
    },
    employee_phone: {
        type: String,
        require: true,
        maxLength: 12,
    }
})

// const User = mongoose.model(UserSchema);
// module.exports = User
    //  OR
module.exports = mongoose.model("Employee" , EmployeeSchema)