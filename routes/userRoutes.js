const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');
const { userValidator } = require('../validators/user.validator');

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

router.post('', userValidator(), createUserValid, (req, res, next) => {
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

router.put('/:id', userValidator(), updateUserValid, (req, res, next) => {
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