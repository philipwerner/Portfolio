'use strict';
var pageView = {};
pageView.handleMainNav = function() {
  $('.main-nav .tab').on('click', function() {
    var $whereToGo = $(this).attr('data-content');
    $('.tab-content').hide();
    $('#' + $whereToGo).fadeIn(1000);
  })

  $('.main-nav .tab:first').click(); // Let's now trigger a click on the first .tab element, to set up the page.
};
$(document).ready(function() {
  pageView.handleMainNav();
})
