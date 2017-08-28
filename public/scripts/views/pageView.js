'use strict';
var app = {} || app;
(function(module) {
  var pageView = {};

  pageView.initIndexPage = function() {
    app.Projects.all.forEach(function(project) {
      $('.tab-content').show();
      $('#projects').append(project.toHtml())
    });

  }
  module.pageView = pageView
})(app)
