const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    employee_name: {
        type: String,
        required: true,
    },
    employee_email: {
        type: String,
        required: true,
    },
    employee_title: {
        type: String,
        required: true,
    },
    employee_department: {
        type: String,
        required: true,
    },
    employee_role: {
        type: String,
        required: true,
    },
    employee_phone: {
        type: String,
        require: true,
    }
})

// const User = mongoose.model(UserSchema);
// module.exports = User
    //  OR
module.exports = mongoose.model("Employee" , EmployeeSchema)