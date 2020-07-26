// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery
//= require moment
//= require fullcalendar
//= require_tree 

$(document).ready(function() {
  $('#calendar').fullCalendar({
      monthNames: ['１月','２月','３月','４月','５月','６月','７月','８月','９月','１０月','１１月','１２月'],
      monthNamesShort: ['１月','２月','３月','４月','５月','６月','７月','８月','９月','１０月','１１月','１２月'],
      dayNames: ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
      dayNamesShort: ['日','月','火','水','木','金','土'],
      events: '/games.json',
      selectable: true,
      selectHelper: true,
  });
});