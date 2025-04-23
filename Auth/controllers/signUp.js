const User = require('../model/UserSchema')

const signUp = async (req , res) => {
    try{
        const { username , email , password , isAdmin} = req.body;
        const createUser = await User.create({
            username,
            email,
            password,
            isAdmin
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