const express = require('express');
const route  = express.Router();

route.get('/', (req, res) => {
    res.json({hey: req.params})
})

// route.get('/:userId', (req, res) => {
//     res.json({hey: req.params.userId})
// })

module.exports = route;

