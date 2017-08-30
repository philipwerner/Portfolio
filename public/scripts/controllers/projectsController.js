'use strict'
var app = app || {};
//
// (function(module){
//   const projectsController = {};
//
//   projectsController.init = function() {
//     $('#home').hide();
//     $('#about').hide();
//     // app.pageView.initIndexPage();
//     // app.Projects.fetchAll();
//     $('#projects').fadeIn(1000);
//   };
//
//   module.projectsController = projectsController
// })(app);

(function(module) {
  const projectsController = {};

  projectsController.init = () => {
    $('#projects').show().siblings().hide();
    app.repos.requestRepos(app.projectsView.init);

  };

  module.projectsController = projectsController;
})(app);
