'use strict'
var app = app || {};

(function(module){
  const carouselController = {};
  carouselController.init = function() {
    $('#about').hide();
    $('#projects').hide();
    $('#home').show();
  };

  module.carouselController = carouselController
})(app);
