const User = require('../model/UserSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const login = async (req , res) => {
    try{
        const { email , password } = req.body;

        // validation
        if(email == '' || password == '') {
            return res.status(400).json({
                success: false,
                message: "Please fill email and password correctly"
            })
        }

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

                // example 1 // way 1
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


                // example 2 // way 2
                // example 2 // way 2


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


                /// important to add on object new item ("token": "token")
            userExist = userExist.toObject()
            userExist.token = token;
            // (password --> undefined) at client side because of security purpose
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