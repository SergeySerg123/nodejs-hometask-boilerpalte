const statusCodes = require('../constants/statusCodes');
const { user } = require('../models/user');
const { body, validationResult } = require('express-validator')

const validationRules = () => {
    return [
        body('firstName').notEmpty().withMessage('FirstName is required.'),
        body('lastName').notEmpty().withMessage('LastName is required.'),
        body('email').matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@gmail.com$/).withMessage('Email should be <your_box>@gmail.com'),
        body('phoneNumber').matches(/^(?:\+380)?(?:[0-9]{9})$/).withMessage('Phone number must be format +380xxxxxxxxx'),
        body('password').isLength({ min: 3 }).withMessage('Password length at least 3 charts.')
    ];
}

const filterRequestBody = (req) => {
    let targetObj = {}    
    Object.keys(user).forEach((value) => {
        if (value !== 'id') {
            targetObj[value] = req.body[value]
        }       
    })
    req.body = targetObj;
}

const createUserValid = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        filterRequestBody(req);
        return next();
    }

    const extractedErrors = [];
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

    return res.status(statusCodes.BAD_REQUEST).json({
        errors: extractedErrors
    });
}

const updateUserValid = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        filterRequestBody(req);
        return next();
    }

    const extractedErrors = [];
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

    return res.status(statusCodes.BAD_REQUEST).json({
        errors: extractedErrors
    });
}

exports.createUserValid = createUserValid;
exports.updateUserValid = updateUserValid;
exports.validationRules = validationRules;