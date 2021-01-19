const { UserRepository } = require('../repositories/userRepository');

class UserService {

    // TODO: Implement methods to work with user
    getUserById(id) {
        const user = UserRepository.getOne(search);
        if(!user) {
            return null;
        }
        return item;
    }

    createNewUser(userData) {
        const item = UserRepository.create(userData);
        if (!item) {
            return null;
        }
        return item;
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