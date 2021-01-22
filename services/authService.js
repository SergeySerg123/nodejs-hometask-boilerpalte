const { throwCustomError } = require('../helpers/throwCustomError');
const UserService = require('./userService');
const errors = require('../constants/statusCodes');

class AuthService {
    singUp(userData) {
        const user = UserService.createNewUser(userData);
        
        if(!user) {
            throwCustomError('Could not create a new user', errors.BAD_REQUEST);
        }
        return user;
    }

    login(userData) {
        const user = UserService.search(userData);
        if(!user) {
            throwCustomError('User not found', errors.NOT_FOUND);
        }
        return user;
    }
}

module.exports = new AuthService();