module.exports = app => {
    const users = require('../controllers/user');
    const router = require('express').Router();

    router.post('/api/signup', users.signup);
    router.post('/api/loginPhone', users.loginPhone);
    router.post('/api/loginEmail', users.loginEmail);


    app.use(router);
}