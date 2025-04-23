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
        // Encrypt password example 1
        const saltRound = 10;
        const hash_password = await bcrypt.hash(password , saltRound);

        // Encrypt password example 2
        let hash_password2;
        try{
            const saltRound2 = 10;
            const hash_password2 = await bcrypt.hash(password , saltRound2);
        }catch(error){
            return res.status(500).json({
                success: false ,
                message: "Error in hashing password"
            })
        }


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