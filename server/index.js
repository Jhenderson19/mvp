const express = require('express');
const app = express();
const port = 4000;
const router = require('./routes.js');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//API Stuff
app.use('/api', router);

//Serve Client Files
app.use('', express.static(__dirname + '../client'));


app.listen(port, () => {
  console.log(`Chaos Dungeon Server listening at http://127.0.0.1:${port}`);
});