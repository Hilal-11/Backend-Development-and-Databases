const User = require('../model/UserSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const login = async (req , res) => {
    try{
        const { email , password } = req.body;

        // check if email exists
        const userExist = await User.findOne({ email });

        if(!userExist){
            return res.status(400).json({
                success: false,
                message: "incorrect email password"
            })
        }

        // compare passwod
        const compsrePassword = await bcrypt.compare(password , userExist.password)

        if(compsrePassword){
            res.status(201).json({
                success: true,
                message: "Successfully Login user",
                token: await jwt.sign({
                    userId: userExist._id.toString(),
                    email: userExist.email
                },
                process.env.SIGNITURE,
                {
                    expiresIn: '12d'
                }
            )
            }) 
        }else{
            res.status(401).json({
                success: false,
                message: "incorrect password"
            })
        }

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