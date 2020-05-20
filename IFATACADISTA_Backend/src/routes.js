const express = require('express');

const routes = express.Router();

const UserController = require('./controllers/UserController');

routes.post('/',UserController.login);
routes.post('/newclient',UserController.create);

module.exports = routes;