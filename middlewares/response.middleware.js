const responseMiddleware = (req, res, next) => {
    if (res.err != undefined) {
        const {status, message, error} = res.err;
        res.status(status).send({message, error});
    } 

    const data = res.data;
    res.send(data);

    next();
}

exports.responseMiddleware = responseMiddleware;