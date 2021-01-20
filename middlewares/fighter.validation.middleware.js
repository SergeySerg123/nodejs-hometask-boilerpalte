const { fighter } = require('../models/fighter');

const createFighterValidationRules = () => {
    return [];
}

const updateFighterValidationRules = () => {

}

const createFighterValid = (req, res, next) => {
    // TODO: Implement validatior for fighter entity during creation
    next();
}

const updateFighterValid = (req, res, next) => {
    // TODO: Implement validatior for fighter entity during update
    next();
}

exports.createFighterValid = createFighterValid;
exports.updateFighterValid = updateFighterValid;
exports.createFighterValidationRules = createFighterValidationRules;
exports.updateFighterValidationRules = updateFighterValidationRules;