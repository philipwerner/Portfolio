'use strict'
var app = app || {};

(function(module){
  const aboutController = {};

  aboutController.init = function() {
    $('#home').hide();
    $('#projects').hide();
    $('#about').fadeIn(1000);
  };

  module.aboutController = aboutController
})(app);
