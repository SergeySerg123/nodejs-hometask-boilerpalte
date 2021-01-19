const responseMiddleware = (req, res, next) => {
   // TODO: Implement middleware that returns result of the query
    if (res.err != undefined) {
        const {status, message, error} = res.err;
        res.status(status).send({message, error});
    } 

    next();
}

exports.responseMiddleware = responseMiddleware;