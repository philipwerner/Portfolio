'use strict'
var app = app || {};

(function(module){
  const aboutController = {};

  aboutController.init = () => {
    $('#about').show().siblings().hide();
    app.repos.requestRepos(app.repoView.index);
  };

  module.aboutController = aboutController
})(app);
