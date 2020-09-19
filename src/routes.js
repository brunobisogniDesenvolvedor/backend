const express = require('express');
const routes = express.Router();



// Routes 

routes.get('/', (req, res) => {
    res.send('hello word');
});



module.exports = routes;