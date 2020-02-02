$(document).ready(function () {

    $(function() {
      $(window).scroll(function () {
         if ($(this).scrollTop() < 20) {
            $('nav a').css('color', '#5c5c5c');
            $('nav').css('background','	rgb(245,245,245)');
            $('nav').css('background', 'none');
            $('#nav-name a').css('color', '#4DA1A9');

         }
         if ($(this).scrollTop() > 50) {
            $('nav').css('background','white');
            $('nav a').css('color', 'black');
            $('#nav-name a').css('color', '#4DA1A9');
         }
      });
   });
  
  
  
  
  });