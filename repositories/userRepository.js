const { BaseRepository } = require('./baseRepository');

class UserRepository extends BaseRepository {
    constructor() {
        super('users');
    }

    getUserById(id) {
        console.log(id);
        return this.dbContext.find({ id }).value();
    }
}

exports.UserRepository = new UserRepository();