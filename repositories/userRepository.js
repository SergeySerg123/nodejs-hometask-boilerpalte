const { BaseRepository } = require('./baseRepository');

class UserRepository extends BaseRepository {
    constructor() {
        super('users');
    }

    getUserById(id) {
        return this.dbContext.find({ id }).value();
    }
}

exports.UserRepository = new UserRepository();