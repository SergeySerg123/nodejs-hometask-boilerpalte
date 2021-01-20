const statusCodes = require('../constants/statusCodes');

const responseMiddleware = (req, res, next) => {
    if (res.err != undefined) {
        const {status, message, error} = res.err;
        res.status(status).send({message, error});
    } 

    const data = res.data;
    if (!data) {
        res.status(statusCodes.NO_CONTENT).send();
    }

    res.send(data);

    next();
}

exports.responseMiddleware = responseMiddleware;