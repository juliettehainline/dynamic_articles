// Scrolling for Nav Bar
$("section").waypoint(function(direction) {
     $("nav li a").removeClass();
     return $("nav li a[href=#" + $(this.element).attr("id") + "]").addClass("active");
   }, {
     offset: 140
   });
   $(window).scroll(function() {
     $("nav.stuck").css({
       transform: "translateX(-" + ($(this).scrollLeft()) + "px)"
     });
     return $("nav:not(.stuck)").css({
       transform: none
     });
   });

// Enables Facebook Share Function //
$(document).ready(function () {
    $('#fb-icon').click(function (event) {
        event.preventDefault();
        FB.ui({
            method: 'share',
            href: [link],
        }, function (response) {});
});

// Enables Twitter Share Function //
// We bind a new event to our link
$('a.tweet').click(function (e) {

   //We tell our browser not to follow that link
   e.preventDefault();

      //We get the URL of the link
      var loc = $(this).attr('href');

      //We get the title of the link
      var title = encodeURIComponent($(this).attr('title')) + ' -';

      //We trigger a new window with the Twitter dialog, in the middle of the page
      window.open('http://twitter.com/share?url=' + loc + '&text=' + title + '&', 'twitterwindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 225) + ', left=' + $(window).width() / 2 + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');

 });
