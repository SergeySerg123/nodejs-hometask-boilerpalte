const responseMiddleware = (req, res, next) => {
    if (res.err != undefined) {
        const {status, message, error} = res.err;
        return res.status(status).json({message, error});
    } 
    const data = res.data;
    return data === undefined ? res.send() : res.send(data);
}

exports.responseMiddleware = responseMiddleware;