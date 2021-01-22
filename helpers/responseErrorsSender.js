const statusCodes = require('../constants/statusCodes');

const responseErrorsSender = (errors, response) => {
    const extractedErrors = [];
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

    return response.status(statusCodes.BAD_REQUEST).json({
        errors: extractedErrors
    });
}

exports.responseErrorsSender = responseErrorsSender;