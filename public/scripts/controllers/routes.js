'use strict'
var app = app || {};

page('/', app.carouselController.init);
page('/projects', app.projectsController.init);
page('/about', app.aboutController.init);

page();
