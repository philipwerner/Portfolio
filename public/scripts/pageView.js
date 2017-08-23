'use strict';
var pageView = {};
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
