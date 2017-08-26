'use strict';
var app = app || {};

(function(module) {
  let projects = [];

  function Projects (rawDataObj) {
    this.title = rawDataObj.title;
    this.source = rawDataObj.source;
    this.body = rawDataObj.body;
  }

  Projects.prototype.toHtml = function() {

    var template = $('#projects').html();
    var templateRender = Handlebars.compile(template);

    return templateRender(this);
  };

  Projects.loadAll = function(rawData) {
    rawData.forEach(function(ele) {
      projects.push(new Projects(ele));
    })
  };

  Projects.fetchAll = function() {
    if (localStorage.rawData) {

      Projects.loadAll(JSON.parse(localStorage.getItem('rawData')));
      console.log(JSON.parse(localStorage.getItem('rawData')));
      app.projectView.initIndexPage(rawData);
    } else {

      $.getJSON('data/projectdata.json')
      .done(function(rawData){
        Projects.loadAll(rawData);
        localStorage.setItem('rawData', JSON.stringify(rawData))
      }).fail(function(error){console.log(error);});
    }
  }
  module.Projects = Projects
})(app)
