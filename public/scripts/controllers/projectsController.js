'use strict'
var app = app || {};

(function(module){
  const projectsController = {};

  projectsController.init = function() {
    $('#home').hide();
    $('#about').hide();
    app.Projects.fetchAll();
    app.pageView.initIndexPage();
    $('#projects').fadeIn(1000);
  };

  module.projectsController = projectsController
})(app);
