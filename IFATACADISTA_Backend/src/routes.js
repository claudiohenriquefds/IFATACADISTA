const express = require('express');

const routes = express.Router();

const UserController = require('./controllers/UserController');

routes.post('/login',UserController.login);
routes.post('/register',UserController.create);

module.exports = routes;