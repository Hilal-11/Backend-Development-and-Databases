
const Employee = require('../models/EmployeeDataModel')

const createEmployee = async (req , res) => {
    try {
        const { employee_name , employee_email , employee_id , employee_department , employee_phone } = req.body;

        const response = await Employee.create({
            employee_name,
            employee_email,
            employee_id,
            employee_department,
            employee_phone
        })

        res.status(200).json({
            success: true ,
            message: "Employee is created in DB",
            data: response
        })
    }catch(error){
        console.log(error.message)
        console.log("Failed to create a employee in DB")

        res.status(500).json( {
            success: false,
            message: "Failed to create empoloyee in DB",
            error: error.message
        })
    }
}

module.exports = createEmployee