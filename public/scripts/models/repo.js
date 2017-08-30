'use strict';
var app = app || {};

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {

    $.get('/github/user/repos')
    .then(
      data => data.forEach(repo => repos.all.push(repo)),
      err => console.error(err.status, err.statusText))
      .then(callback)
  };


  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
