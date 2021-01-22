const { body } = require('express-validator');

const fighterValidator = () => {
    return [
        body('name').notEmpty().withMessage('Name is required.'),
        body('power', 'Power must be between 1 and 10.').isFloat().custom(val => (val >= 1 && val <= 10)),
        body('defense', 'Defense must be between 1 and 10.').isFloat().custom(val => (val >= 1 && val <= 10))
    ];
}

exports.fighterValidator = fighterValidator;