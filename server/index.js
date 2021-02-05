const express = require('express');
const app = express();
const port = 4000;
const router = require('./routes.js');
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Serve Client Files
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
app.use('/layouts', express.static(path.join(__dirname, 'data', 'layouts')));
app.use('/layouts/default', express.static(path.join(__dirname, 'default')));

//API Stuff
app.use('/api', router);


//Start Server
app.listen(port, () => {
  console.log(`Chaos Dungeon Server listening at http://127.0.0.1:${port}`);
});