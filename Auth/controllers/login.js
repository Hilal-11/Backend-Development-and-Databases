const User = require('../model/UserSchema')

const login = async (req , res) => {
    try{
        
    }catch(error) {
        console.log(error.message)
        console.log("incorrect email and password")
        res.status(401).json({
            success: false,
            message: "incorrect email and password"
        })
    }
}

module.exports = login