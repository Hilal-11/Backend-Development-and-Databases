
const User = require('../models/UserSchema');

const signUp = async (req , res) => {
    try {
        const { username , email , password } = req.body;
        const response = await User.create( {
            username ,
            email,
            password
        })

        res.status(200).json( {
            success: true,
            message: `${username} Successfully SignUp`,
            token: await response.generateToken(),
        })
    }catch(error) {
        console.log(error.message)
        console.log("Failed ti signup")

        res.status(500).json({
            success: true,
            error: error.message,
            message: "Failed to signup"
        })   
    }
}