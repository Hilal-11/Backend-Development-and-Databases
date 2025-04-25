const express = require('express');
const router = express.Router();

const signUp = require('../controllers/signUp');
const login = require('../controllers/login');
const { auth , student , admin } = require('../middlewares/auth');

router.post('/signUp' , signUp);
router.post('/login', login);

// Protected Routes
router.get("/test" , auth , (req , res) => {
    res.json({
        success: true,
        message: "wel come to protected route for TEST"
    }) 
});

router.get("/students" , auth , student , (req , res) => {
    res.json({
        success: true,
        message: "wel come to protected route for students and visitors"
    }) 
});
router.get("/admin" , auth , admin , (req , res) => {
    res.json({
        success: true,
        message: "Wel Come to Admin Protected Route."
    })
});

module.exports = router;
