'use strict'

let projectData = [
  {
    title: 'project 1',
    source: 'http://placehold.it/450x300/000000',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Similiter sensus, cum accessit ad naturam, tuetur illam quidem, sed etiam se tuetur; Etiam beatissimum? His singulis copiose responderi solet, sed quae perspicua sunt longa esse non debent.'
  }, {
    title: 'project 2',
    source: 'http://placehold.it/450x300/000000',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Similiter sensus, cum accessit ad naturam, tuetur illam quidem, sed etiam se tuetur; Etiam beatissimum? His singulis copiose responderi solet, sed quae perspicua sunt longa esse non debent.'
  }, {
    title: 'project 3',
    source: 'http://placehold.it/450x300/000000',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Similiter sensus, cum accessit ad naturam, tuetur illam quidem, sed etiam se tuetur; Etiam beatissimum? His singulis copiose responderi solet, sed quae perspicua sunt longa esse non debent.'
  }
]

let projects = [];

function Projects (rawDataObj) {
  this.title = rawDataObj.title;
  this.source = rawDataObj.source;
  this.body = rawDataObj.body;
}

Projects.prototype.toHtml = function() {

  var template = $('#project-template').html();
  var templateRender = Handlebars.compile(template);

  return templateRender(this);
};

projectData.forEach(function(articleObject) {
  projects.push(new Projects(articleObject));
});

projects.forEach(function(projects){
  $('#projects').append(projects.toHtml());
});
$(document).ready(function() {
  Projects.prototype.toHtml();
})
