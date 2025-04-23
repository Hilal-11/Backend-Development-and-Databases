const User = require('../model/UserSchema')
const bcrypt = require('bcrypt')
const signUp = async (req , res) => {
    try{
        const { username , email , password , role} = req.body;


        // check if user already exists
        const userExist = await User.findOne({ email })
        if(userExist) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            })
        }
        // Encrypt password
        const saltRound = 10;
        const hash_password = await bcrypt.hash(password , saltRound);

        const createUser = await User.create({
            username,
            email,
            password: hash_password,
            role
        });

        res.status(201).json({
            success: true,
            message: "User created successfully",
            response: createUser,
        })

    }catch(error) {
        console.log(error.message);
        console.log("Failed to create a user")
        res.status(400).json({
            success: false,
            message: "Failed to create a user",
        })
    }
}

module.exports = signUp