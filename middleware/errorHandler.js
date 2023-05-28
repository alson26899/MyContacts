const StatusCode = require("../constants/statusCode");

const errorHandler = (err,req,res,next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch(statusCode){
        case StatusCode.VALIDATION_FAILED:
            res.json({
                title: "Validation Failed",
                message : err.message,
                stackTrace: err.stack
            });
            break;

        case StatusCode.UNAUTHORIZED:
            res.json({
                title: "Unathorized",
                message : err.message,
                stackTrace: err.stack
            });
            break;

        case StatusCode.FORBIDDEN:
            res.json({
                title: "Forbidden",
                message : err.message,
                stackTrace: err.stack
            });
            break;

        case StatusCode.NOT_FOUND:
            res.json({
                title: "Not Found",
                message : err.message,
                stackTrace: err.stack
            });
            break;
        case StatusCode.INTERNAL_SEVER_ERROR:
            res.json({
                title: "Server Error",
                message : err.message,
                stackTrace: err.stack
            });
            break;
        default:
            console.log('No Error all good');
            break;
    }
}

module.exports = errorHandler; 