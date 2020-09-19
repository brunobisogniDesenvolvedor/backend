const express = require('express')
const routes = express.Router()
const controllerUser = require('./controllers/user')

// Routes

routes.get('/', (req, res) => {
  res.send('hello word')
})

routes.post('/user', controllerUser.created)

module.exports = routes
