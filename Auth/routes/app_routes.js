const express = require('express');
const router = express.Router();

const signUp = require('../controllers/signUp');
const login = require('../controllers/login');
const { auth , isStudent , isAdmin } = require('../middlewares/auth');

router.post('/signUp' , signUp);
router.post('/login', login);

// Protected Routes
router.get("/student" , auth , isStudent , (req , res) => {
    res.json({
        success: true,
        message: "wel come to protected route for students and visitors"
    }) 
});
router.get("/isAdmin" , isAdmin , (req , res) => {
    res.json({
        success: true,
        message: "Wel Come to Admin Protected Route."
    })
});

module.exports = router;
