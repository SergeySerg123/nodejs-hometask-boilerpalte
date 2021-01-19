const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

router.get('users', (req, res, next) => {

});

router.get('users/:id', (req, res, next) => {

});

router.post('users', (req, res, next) => {
    const newUser = req.body;

    const item = UserService.createNewUser(newUser);

    if (item !== null) {
        
    }
});

router.put('users/:id', (req, res, next) => {

});

router.delete('users/:id', (req, res, next) => {

});

module.exports = router;