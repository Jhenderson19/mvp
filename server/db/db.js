const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chaosDungeon'
});

connection.connect((err) => {
  if (err) {
    console.error('error connecting to database');
    console.error(err);
    return;
  }
  console.log('successfuly connected to database');
})

module.exports = connection;