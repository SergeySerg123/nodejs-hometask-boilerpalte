const { body } = require('express-validator');

const userValidator = () => {
    return [
        body('firstName').notEmpty().withMessage('FirstName is required.'),
        body('lastName').notEmpty().withMessage('LastName is required.'),
        body('email').matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@gmail.com$/).withMessage('Email should be <your_box>@gmail.com'),
        body('phoneNumber').matches(/^(?:\+380)?(?:[0-9]{9})$/).withMessage('Phone number must be format +380xxxxxxxxx'),
        body('password').isLength({ min: 3 }).withMessage('Password length at least 3 charts.')
    ];
}

exports.userValidator = userValidator;