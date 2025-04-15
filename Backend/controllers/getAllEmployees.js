
const Employee = require('../models/EmployeeDataModel')

const getAllEmployees = async (req , res) => {
    try {   

        const response = await Employee.find({});

        res.status(200).json({
            success: true,
            message: "Get all empleyees form DB ",
            data: response
        })

    }catch(error) {
        console.log(error.message)
        console("Failed to get the employees from DB")

        res.status(500).json( {
            success: false,
            error: error.message,
            message: "Failed to get the employees from DB"
        })
    }
}

module.exports = getAllEmployees