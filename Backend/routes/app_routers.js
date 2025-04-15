
const express = require('express')
const router = express.Router();

const getAllUsers = require('../controllers/getAllUsers')
const createUser = require('../controllers/createUser')

router.post("/createUser" , createUser)
router.get("/getAllUsers" , getAllUsers);


module.exports = router