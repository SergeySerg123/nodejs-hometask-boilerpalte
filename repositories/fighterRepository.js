const { BaseRepository } = require('./baseRepository');

class FighterRepository extends BaseRepository {
    constructor() {
        super('fighters');
    }

    getFighterById(id) {
        return this.dbContext.find({ id }).value();
    }

    createFighter(fighterData) {
        fighterData.health = 100;
        return this.create(fighterData);
    }
}

exports.FighterRepository = new FighterRepository();