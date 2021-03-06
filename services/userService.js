const { throwCustomError } = require('../helpers/throwCustomError');
const { UserRepository } = require('../repositories/userRepository');
const statusCodes = require('../constants/statusCodes');

class UserService {
    getUsers() {
        const users = UserRepository.getAll();

        if(!users) {
            throwCustomError('No users.', statusCodes.NOT_FOUND);
        }
        return users;
    }
    
    getUser(id) {
        const user = UserRepository.getUserById(id);
        if(!user) {
            throwCustomError(`User not found.`, statusCodes.NOT_FOUND);
        }
        return user;
    }

    createUser(userData) {
        const user = UserRepository.create(userData);
        if (!user) {
            throwCustomError(`Could not create a new user.`, statusCodes.BAD_REQUEST);
        }
        return user;
    }

    updateUser(id, user) {
        const oldUser = UserRepository.getUserById(id);
        if(!oldUser) {
            throwCustomError(`User not found.`, statusCodes.NOT_FOUND);
        }
        const updatedUser = UserRepository.update(id, user);
        if(!updatedUser) {
            throwCustomError(`Could not update the user.`, statusCodes.BAD_REQUEST);
        }
        return updatedUser;
    }

    deleteUserById(id) {
        const oldUser = UserRepository.getUserById(id);
        if(!oldUser) {
            throwCustomError(`User not found.`, statusCodes.NOT_FOUND);
        }
        const deletedUser = UserRepository.delete(id);
        if(!deletedUser) {
            throwCustomError(`Could not delete the user.`, statusCodes.BAD_REQUEST);
        }
    }

    search(search) {
        const item = UserRepository.getOne(search);
        if(!item) {
            return null;
        }
        return item;
    }
}

module.exports = new UserService();