const statusCodes = require('../constants/statusCodes');

const responseMiddleware = (req, res, next) => {
    if (res.err != undefined) {
        const {status, message, error} = res.err;
        return res.status(status).json({message, error});
    } 

    const data = res.data;
    if (!data) {
        res.status(statusCodes.NO_CONTENT).send();
    } else {
        res.send(data);
    }
    next();
}

exports.responseMiddleware = responseMiddleware;