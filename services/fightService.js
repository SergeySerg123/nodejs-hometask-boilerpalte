const { FightRepository } = require('../repositories/fightRepository');
const { throwCustomError } = require('../helpers/throwCustomError');
const statusCodes = require('../constants/statusCodes');

class FightersService {
    createFight(fightData) {
        const fight = FightRepository.createFight(fightData);

        if (!fight) {
            throwCustomError(`Could not create a new fight.`, statusCodes.BAD_REQUEST);
        }
        return fight;
    }
}

module.exports = new FightersService();