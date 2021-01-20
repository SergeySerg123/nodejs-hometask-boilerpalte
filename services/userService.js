const throwCustomError = require('../helpers/CustomError');
const { UserRepository } = require('../repositories/userRepository');
const errors = require('../constants/statusCodes');

class UserService {
    // To think about ERROR
    getUsers() {
        const users = UserRepository.getAll();

        if(!users) {
            throwCustomError('No users.', errors.NOT_FOUND);
        }
        return users;
    }
    
    getUser(id) {
        const user = UserRepository.getUserById(user);
        if(!user) {
            throwCustomError(`User not found.`, errors.NOT_FOUND);
        }
        return user;
    }

    createUser(userData) {
        const user = UserRepository.create(userData);
        if (!user) {
            throwCustomError(`Could not create a new user.`, errors.BAD_REQUEST);
        }
        return user;
    }

    updateUser(id, user) {
        const updatedUser = UserRepository.update(id, user);
        if(!updatedUser) {
            throwCustomError(`Could not update the user.`, errors.BAD_REQUEST);
        }
        return updatedUser;
    }

    deleteUserById(id) {
        const deletedUser = UserRepository.delete(id);
        if(!deletedUser) {
            throwCustomError(`Could not delete the user.`, errors.BAD_REQUEST);
        }
    }

    // TODO: replace method
    search(search) {
        const item = UserRepository.getOne(search);
        if(!item) {
            return null;
        }
        return item;
    }
}

module.exports = new UserService();