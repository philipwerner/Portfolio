'use strict'

const pg = require('pg');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const requestProxy = require('express-request-proxy');
const PORT = process.env.PORT || 3333;
const app = express();
const conString = process.env.DATABASE_URL;
const client = new pg.Client(conString);
client.connect();
client.on('error', err => console.error(err));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}
app.get('/github/*', proxyGitHub);

app.get('/projects', (request, response) =>
response.sendFile('index.html', {root: './public'}));

app.get('/about', (request, response) =>
response.sendFile('index.html', {root: './public'}));

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
