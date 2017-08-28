'use strict'
var app = app || {};

(function(module){
  const carouselController = {};
  carouselController.init = function() {
    app.Projects.fetchAll(app.pageView.initIndexPage);
    $('#home').fadeIn(1000);
    $('#about').hide();
    $('#projects').hide();
  };

  module.carouselController = carouselController
})(app);
