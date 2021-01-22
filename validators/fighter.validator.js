const { body } = require('express-validator');

const fighterValidator = () => {
    return [
        body('name').notEmpty().withMessage('Name is required.'),
        body('power', 'Power must be between 1 and 10.').custom(validateNumbers),
        body('defense', 'Defense must be between 1 and 10.').custom(validateNumbers)
    ];
}

const validateNumbers = (val) => {
    if (typeof val === 'number') {
        return (val >= 1 && val <= 10)
    }
    return false;
}

exports.fighterValidator = fighterValidator;