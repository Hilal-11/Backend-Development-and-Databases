
const User = require('../models/UserSchema');
const bcrypt = require('bcrypt')
const login = async (req , res) => {
    try {
        const { email , password } = req.body;
        const userExists = await User.findOne({ email });
        if(!userExists) {
            return res.status(400).json({
                success: false,
                message: "Invalid emal and password"
            })
        }
        const user = await bcrypt.compare(password , userExists.password);
        if(user) {
            res.status(201).json({ 
                success: true,
                message: "Login successfull",
                token: await userExists.generateToken(),
                userId: userExists._id.toString()
            })
        }else{
            res.status(401).json({
                success: false,
                message: "Invalid email and passwod"
            })
        }   
    }catch(error) {
        console.log(error.message);
        console.log("Login unsuccessful");
        res.status(500).json({ 
            success: false,
            error: error.message,
            message: "Falied to login" 
        })
    }
}

module.exports = login