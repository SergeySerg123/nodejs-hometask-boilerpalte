const { FighterRepository } = require('../repositories/FighterRepository');
const { throwCustomError } = require('../helpers/throwCustomError');
const statusCodes = require('../constants/statusCodes');

class FighterService {
    getFighters() {
        const fighters = FighterRepository.getAll();

        if(!fighters) {
            throwCustomError('No fighters.', statusCodes.NOT_FOUND);
        }
        return fighters;
    }
    
    getFighter(id) {
        const fighter = FighterRepository.getFighterById(id);
        if(!fighter) {
            throwCustomError(`fighter not found.`, statusCodes.NOT_FOUND);
        }
        return fighter;
    }

    createFighter(fighterData) {
        const fighter = FighterRepository.createFighter(fighterData);

        if (!fighter) {
            throwCustomError(`Could not create a new fighter.`, statusCodes.BAD_REQUEST);
        }
        return fighter;
    }

    updateFighter(id, fighter) {
        const oldFighter = FighterRepository.getFighterById(id);
        if(!oldFighter) {
            throwCustomError(`fighter not found.`, statusCodes.NOT_FOUND);
        }
        const updatedfighter = FighterRepository.update(id, fighter);

        if(!updatedfighter) {
            throwCustomError(`Could not update the fighter.`, statusCodes.BAD_REQUEST);
        }
        return updatedfighter;
    }

    deleteFighterById(id) {
        const oldFighter = FighterRepository.getFighterById(id);
        if(!oldFighter) {
            throwCustomError(`fighter not found.`, statusCodes.NOT_FOUND);
        }
        const deletedfighter = FighterRepository.delete(id);
        if(!deletedfighter) {
            throwCustomError(`Could not delete the fighter.`, statusCodes.BAD_REQUEST);
        }
    }
}

module.exports = new FighterService();