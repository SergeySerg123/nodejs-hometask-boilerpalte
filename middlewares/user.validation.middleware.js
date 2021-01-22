const statusCodes = require('../constants/statusCodes');
const { user } = require('../models/user');
const { body, validationResult } = require('express-validator')

const createUservalidationRules = () => {
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
        targetObj[value] = req.body[value]
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
    // TODO: Implement validatior for user entity during update

    next();
}

exports.createUserValid = createUserValid;
exports.updateUserValid = updateUserValid;
exports.createUservalidationRules = createUservalidationRules;