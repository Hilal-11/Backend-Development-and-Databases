
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config();
const JWT_SIGNITURE_KEY = process.env.JWT_SIGNITURE_KEY
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        require: true,
    }
})

UserSchema.pre("save" , async function(next) {
    const user = this;
    if(!user.isModified('password')) {
        next();
    }
    try{
        const salt_round = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password , salt_round)
        this.password = hash_password;
    }catch(error) {
        console.log(error.message);
        console.log("Failed to hash the password")
        next(error.message)
    }
})

UserSchema.methods.generateToken = async function (){
    try{
        return jwt.sign({
            userId: this._id.toString(),
            emial: this.email,
        }, 
            JWT_SIGNITURE_KEY,
        {
            expiresIn: '3d'
        })
    }catch(error) {
        console.log(error.message)
        console.log("Failed to generaete JSON web token")
    }
}

module.exports = mongoose.model('User' , UserSchema)