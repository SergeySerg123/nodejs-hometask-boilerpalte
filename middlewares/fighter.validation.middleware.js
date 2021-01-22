const { fighter } = require('../models/fighter');
const { validationResult } = require('express-validator');
const {filterRequestBody} = require('../helpers/filterRequestBody');
const {responseErrorsSender} = require('../helpers/responseErrorsSender');

const createFighterValid = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        filterRequestBody(req, fighter);
        return next();
    }

    responseErrorsSender(errors, res);
}

const updateFighterValid = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        filterRequestBody(req, fighter);
        return next();
    }

    responseErrorsSender(errors, res);
}

exports.createFighterValid = createFighterValid;
exports.updateFighterValid = updateFighterValid;