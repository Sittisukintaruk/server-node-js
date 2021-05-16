const express = require("express");
const route = express.Router();
const setVideolive = require("../dataParse");
const fs = require('fs');

route.get("/",  (req, res) => {
  setVideolive();
  let rawdata = fs.readFileSync('./json/liveChannel.json');
  let student = JSON.parse(rawdata);

  res.json(student);
  res.status(400);
});

// route.get('/:userId', (req, res) => {
//     res.json({hey: req.params.userId})
// })

module.exports = route;
