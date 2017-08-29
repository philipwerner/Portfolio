'use strict'

const pg = require('pg');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3333;
const app = express();
const conString = 'postgres://localhost:5432';
const client = new pg.Client(conString);
client.connect();
client.on('error', err => console.error(err));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));


app.listen(PORT, function(){
  console.log('Portfolio is listening on port ' + PORT);
})

loadDB();

function loadProjects() {
  client.query('SELECT COUNT(*) FROM projects')
  .then(result => {
    if(!parseInt(result.rows[0].count)) {
      fs.readFile('./public/data/projectdata.json', (err, fd) => {
        JSON.parse(fd.toString()).forEach(ele => {
          client.query(`
            INSERT INTO
            projects(title, source, body)
            VALUES ($1, $2, $3);
          `,
            [ele.title, ele.source, ele.body]
          )
        })
      })
    }
  })
}

function loadDB() {
  client.query(`
    CREATE TABLE IF NOT EXISTS projects (
      project_id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      source VARCHAR(255)
      body TEXT NOT NULL);`
    )
    .then(function() {
      loadProjects();
    })
    .catch(function(err) {
      console.error(err);
    }
  );
}
