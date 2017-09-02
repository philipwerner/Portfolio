'use strict';
var app = app || {};

(function(module) {
  const projectsView = {};

  const ui = function() {
    let $projects = $('#projects');

    $projects.find('ul').empty();
    $projects.show().siblings().hide();
  };

  var template = $('#project-template').html();
  var render = Handlebars.compile(template);

  projectsView.index = function() {
    ui();

    $('#projects ul').append(
      app.repos.with('name').map(render)
    );
  };

  module.projectsView = projectsView;
})(app);
