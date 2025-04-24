const User = require('../model/UserSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const login = async (req , res) => {
    try{
        const { email , password } = req.body;

        // check if email exists
        let userExist = await User.findOne({ email });

        if(!userExist){
            return res.status(400).json({
                success: false,
                message: "incorrect email password"
            })
        }

        // compare passwod
        const comparePassword = await bcrypt.compare(password , userExist.password)
        const payload = {
            userId: userExist._id.toString(),
            email: userExist.email,
            role: userExist.role
        }

        if(comparePassword){

            
      


            // res.status(201).json({
            //     success: true,
            //     message: "Successfully Login user",
            //     token: await jwt.sign(
            //                     payload ,
            //                     process.env.SIGNITURE,
            //                     {
            //                         expiresIn: '12d'
            //                     }
            //     )

            //     // res.cookie()
            // }) 


            const token = jwt.sign(
                        payload ,
                        process.env.SIGNITURE,
                        {
                            expiresIn: '12d'
                        });

            const options = {
                expires: new Date( Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true,
            }

            userExist.token = token
            userExist.password = undefined

            res.cookie("token", token , options).status(200).json({
                success: true,
                token,
                userExist,
                message: "Successfully Login user",

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