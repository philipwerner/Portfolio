'use strict';
var app = app || {};

(function(module) {
  const pageView = {};

  pageView.initIndexPage = function() {
    app.Projects.all.forEach(function(project) {
      $('.tab-content').show();
      $('#projects').append(project.toHtml())
    });

  }
  module.pageView = pageView
})(app)
