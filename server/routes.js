var router = require('express').Router();
var roomGenerator = require('./models/roomGenerator');
var saveManager = require('./models/saveManager')

router.get('/room', (req, res, next) => {
  var room = roomGenerator.createRoom();
  console.log(room);
  res.status(200).json(room)
});

router.get('/save', (req, res, next) => {

});

router.post('/save', (req, res, next) => {



  res.status(200).json(req.body);


  next();
});

module.exports = router;