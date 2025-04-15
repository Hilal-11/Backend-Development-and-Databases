
const express = require('express')
const router = express.Router();

const getAllEmployees = require('../controllers/getAllEmployees')
const createEmployee = require('../controllers/createEmployee')

router.post("/createEmployee" , createEmployee)
router.get("/getAllEmployees" , getAllEmployees);


module.exports = router