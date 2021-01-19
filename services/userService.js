const throwCustomError = require('../helpers/CustomError');
const { UserRepository } = require('../repositories/userRepository');
const errors = require('../constants/statusCodes');

class UserService {

    getUsers() {
        const users = UserRepository.getUsers();

        if(!users) {
            throwCustomError('No users.', errors.NOT_FOUND);
        }
        return users;
    }
    
    getUserById(id) {
        const user = UserRepository.getUserById(id);
        if(!user) {
            throwCustomError(`User with id ${id} not found.`, errors.NOT_FOUND);
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
        const oldUser = UserRepository.getUserById(id);
        if(!oldUser) {
            throwCustomError(`User with id ${id} not found.`, errors.NOT_FOUND);
        }

        oldUser.firstName = user.firstName;
        oldUser.lastName = user.lastName;
        oldUser.email = user.email;
        oldUser.phoneNumber = user.phoneNumber;

        const updatedUser = UserRepository.updateUser(oldUser);

        if (!updatedUser) {
            throwCustomError(`Could not update a old user with id ${id}.`, errors.BAD_REQUEST);
        }

        return user;
    }

    deleteUserById(id) {
        const result = UserRepository.deleteUserById(id);
        if(!result) {
            throwCustomError(`Could not delete a user with id ${id}.`, errors.BAD_REQUEST);
        }
        return result;
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