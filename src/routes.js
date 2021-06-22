const routes = require('express').Router()
const { User } = require('./app/models');

User.create({name: 'igormaia', 
email:'igormaia2001@gmail.com',
password_hash: '321321312'
});

// definição de rotas

module.exports = routes;