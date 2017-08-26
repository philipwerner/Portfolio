'use strict';
var app = app || {};
(function(module) {
  let pageView = {};
  pageView.handleMainNav = function() {
    $('.main-nav .tab').on('click', function() {
      var $whereToGo = $(this).attr('data-content');
      console.log($whereToGo);
      $('.tab-content').hide();
      $('#' + $whereToGo).fadeIn(1000);
    })

    $('.main-nav .tab:first').click();
  };
  $(document).ready(function() {
    pageView.handleMainNav();
  })

  // pageView.create = function() {
  //   let project
  //   $('#projects').empty();
  //
  //   project = new app.Projects({
  //     title: $('#title').val(),
  //     source: $('#project-img').val(),
  //     body: $('#body').val()
  //   });
  // };

  pageView.initIndexPage = function() {
    app.Projects.all.forEach(function(project) {
      $('.tab-content').show();
      $('#projects').append(project.toHtml())
    });
    pageView.handleMainNav();
  }
  module.pageView = pageView
})(app)
