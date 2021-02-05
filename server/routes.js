var router = require('express').Router();
var roomGenerator = require('./models/roomGenerator');
var saveManager = require('./models/saveManager')

router.get('/room', (req, res, next) => {
  var room = roomGenerator.createRoom();
  console.log(room);
  res.status(200).json(room);
});

router.post('/save/lookup', (req, res, next) => {
  console.log('received /save get request');
  res.status(200).send('save');
});

router.post('/save/record', (req, res, next) => {
  console.log('received /save post request');

  saveManager.record(req.body);
  res.status(200).send('added save');

  next();
});

module.exports = router;