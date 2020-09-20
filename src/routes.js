const express = require('express')
const routes = express.Router()
const controllerUser = require('./controllers/user')
const controllerEscavador = require('./controllers/escavador')

// Routes

routes.get('/', (req, res) => {
  res.send('hello word')
})

routes.post('/user', controllerUser.created)

routes.get('/ultimasmovimentacoes', controllerEscavador.getDataProcess)

module.exports = routes
