const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValid, validationRules, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

router.get('', (req, res, next) => {
    try {
        const users = UserService.getUsers();
        res.data = users;
    } catch (err) {
        res.err = err;
    } finally {
        next();
    }
}, responseMiddleware);

router.get('/:id', (req, res, next) => {
    try {
        const id = req.params.id;
        const user = UserService.getUser(id);
        res.data = user;
    } catch (err) {
        res.err = err;
    } finally {
        next();
    }  
}, responseMiddleware);

router.post('', validationRules(), createUserValid, (req, res, next) => {
    try {
        const userData = req.body;
        const user = UserService.createUser(userData);
        res.data = user;
    } catch (err) {
        res.err = err;
    } finally {
        next();
    }
}, responseMiddleware);


// TODO: validation middleware
router.put('/:id', validationRules(), updateUserValid, (req, res, next) => {
    try {
        const id = req.params.id;
        const user = req.body;
    
        const result = UserService.updateUser(id, user);
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
        UserService.deleteUserById(id);
    } catch (err) {
        res.err = err;
    } finally {
        next();
    } 
}, responseMiddleware);

module.exports = router;