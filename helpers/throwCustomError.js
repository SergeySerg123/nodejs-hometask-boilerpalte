const throwCustomError = (message, status) => {
    throw new CustomError(message, status);
}

class CustomError extends Error {
    constructor(message, status){
        super();
        this.message = message;
        this.status = status;
        this.error = true;
    }
}

module.exports = throwCustomError;