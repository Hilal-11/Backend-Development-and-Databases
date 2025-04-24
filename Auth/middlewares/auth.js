// proetected routes (Important)

// Admin route
// Student route
// Visitor route


const jwt = require('jsonwebtoken');
const bcrypy = require('bcrypt')
require('dotenv').config();


// FIRST MIDDLEWARE

exports.auth = async (req , res , next) => {
    try {
        // Extract JWT Web Token
        // OTHER WAYS TO FETCH JWT TOKEN
        const token = req.body.token || req.cookies.token;

        if(!token) {
            return res.status(401).json({
                success: false,
                message: "Token missing"
            })
        }

        // VERIFY THE TOKEN
        try{
            const decode = jwt.verify(token , process.env.SIGNITURE)
            console.log(decode);
            // why this , what does it mean ☠️
            req.user = decode;
        }catch(err){
            res.status(400).json({
                success: false,
                message: "Invalid token"
            })
        }

    }catch(error){
        console.log(error.message)
        res.status(400).json({
            success: false,
            message: "Something went wrong while varifying the token"
        })
    }
}


// SECOND MIDDLEWARE
exports.student = async (req , res , next) => {
    try {
        if(req.user.role !== "Student") {
            return res.status(401).json({
                success: false,
                message: "This is protected route for students"
            })
        }
        next();
    }catch(error){
        res.status(500).json({
            success: false,
            message: "users role is not matching"
        })
    }
}


// THIRD MIDDLEWARE

exports.admin = async (req , res , next) => {
    try {
        if(req.user.role !== "Admin") {
            return res.status(401).json({
                success: false,
                message: "This is protected route for students"
            })
        }
        next()

    }catch(error){
        res.status(500).json({
            success: false,
            message: ""
        })
    }
}


