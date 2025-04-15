const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        maxLength: 20
    },
    email: {
        type: String,
        required: true,
        maxLength: 20
    },
    password: {
        type: String,
        required: true,
        maxLength: 20,
    },
    phone: {
        type: String,
        require: true,
        maxLength: 12,
    }
})

// const User = mongoose.model(UserSchema);
// module.exports = User
    //  OR
module.exports = mongoose.model("User" , UserSchema)