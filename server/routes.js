var router = require('express').Router();
var roomGenerator = require('./models/roomGenerator');
var saveManager = require('./models/saveManager')

router.get('/room', (req, res, next) => {
  var room = roomGenerator.createRoom();
  res.status(200).json(room);
});

router.post('/save/lookup', (req, res, next) => {
  console.log('received /save get request');
  saveManager.get(req.body.saveName)
    .then((results) => {
      console.log('found the following results...');
      console.log(results);
    })
    .catch((error) => {
      console.error('error: ', error);
    })
});

router.post('/save/record', (req, res, next) => {
  console.log('received /save post request');
  console.log(req.body);

  saveManager.record(req.body)
    .then((results) => {
      res.status(200).send('Sucessfully added Save!');
    })
    .catch()

  next();
});

module.exports = router;