
const errorMiddleware = async (err , req , res , next) => {
    const status = err.status || 500;
    const message = err.message || 'Backend Error'

    return res.status(status).json({
        success: false,
        message,
    })
}

module.exports = errorMiddleware