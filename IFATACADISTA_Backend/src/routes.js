const express = require('express');

const routes = express.Router();

const ClientController = require('./controllers/ClientController');

routes.post('/login',ClientController.login);
routes.post('/newclient',ClientController.create);

module.exports = routes;