const express = require('express');

const routes = express.Router();

routes.get('/login',function(req, res) {
    res.send('Login');
});

routes.get('/newclient',function(req, res) {
    res.send('Novo Cliente');
});
routes.get('/newuser',function(req, res) {
    res.send('Novo Usuário');
});
routes.get('/newprovider',function(req, res) {
    res.send('Novo Fornecedor');
});

module.exports = routes;