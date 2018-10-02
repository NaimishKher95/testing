const routes = require('express').Router();
const service = require('./service');
const middle = require('./middleware')

routes.post('/reg', service.Registration)
routes.post('/login', service.Login)
routes.post('/profile', middle.isAdminAuthenticated ,service.profile)

module.exports = routes;