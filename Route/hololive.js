const express = require('express');
const route  = express.Router();
const setVideolive = require('../dataParse');

setVideolive();

route.get('/', (req, res) => {
    res.json({hey: req.params})
})

// route.get('/:userId', (req, res) => {
//     res.json({hey: req.params.userId})
// })

module.exports = route;

