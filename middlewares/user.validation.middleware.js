const { user } = require('../models/user');
const { validationResult } = require('express-validator');
const {filterRequestBody} = require('../helpers/filterRequestBody');
const {responseErrorsSender} = require('../helpers/responseErrorsSender');

const createUserValid = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        filterRequestBody(req, user);
        return next();
    }

    return responseErrorsSender(errors, res);
}

const updateUserValid = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        filterRequestBody(req, user);
        return next();
    }

    responseErrorsSender(errors, res);
}

exports.createUserValid = createUserValid;
exports.updateUserValid = updateUserValid;