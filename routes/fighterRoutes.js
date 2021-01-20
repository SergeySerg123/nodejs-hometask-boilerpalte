const { Router } = require('express');
const FighterService = require('../services/fighterService');
const { responseMiddleware } = require('../middlewares/response.middleware');
const { createFighterValid, createFighterValidationRules, updateFighterValidationRules, updateFighterValid } = require('../middlewares/fighter.validation.middleware');

const router = Router();

router.get('', (req, res, next) => {
    try {
        const fighters = FighterService.getFighters();
        res.data = fighters;
    } catch (err) {
        res.err = err;
    } finally {
        next();
    }
}, responseMiddleware);

router.get('/:id', (req, res, next) => {
    try {
        const id = req.params.id;
        const fighter = FighterService.getFighter(id);
        res.data = fighter;
    } catch (err) {
        res.err = err;
    } finally {
        next();
    }  
}, responseMiddleware);

//TODO: middlewares implementation
router.post('', createFighterValidationRules(), createFighterValid, (req, res, next) => {
    try {
        const fighterData = req.body;
        const fighter = FighterService.createFighter(fighterData);
        res.data = fighter;
    } catch (err) {
        res.err = err;
    } finally {
        next();
    }
}, responseMiddleware);


// TODO: validation middleware
router.put('/:id', (req, res, next) => {
    try {
        const id = req.params.id;
        const fighter = req.body;
    
        const result = FighterService.updateFighter(id, fighter);
        res.data = result; 
    } catch (err) {
        res.err = err;
    } finally {
        next();
    }  
}, responseMiddleware);

router.delete('/:id', (req, res, next) => {
    try {
        const id = req.params.id;
        FighterService.deleteFighterById(id);
    } catch (err) {
        res.err = err;
    } finally {
        next();
    } 
}, responseMiddleware);

module.exports = router;