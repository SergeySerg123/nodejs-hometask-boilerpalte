const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

router.get('users', (req, res, next) => {
    try {
        const users = UserService.getUsers();
        res.data = users;
    } catch (err) {
        res.err = err;
    } finally {
        next();
    }
}, responseMiddleware);

router.get('users/:id', (req, res, next) => {
    try {
        const id = req.params.id;
        const user = UserService.getUserById(id);
        res.data = user;
    } catch (err) {
        res.err = err;
    } finally {
        next();
    }  
});

router.post('users', (req, res, next) => {
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

router.put('users/:id', (req, res, next) => {
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

router.delete('users/:id', (req, res, next) => {
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