$(document).ready(function () {
 

   






  $(function() {
    $(window).scroll(function () {
       if ($(this).scrollTop() > 515) {
          $('.navbar a').css('color', 'black');
          $('.navbar').css('background','	rgb(245,245,245)');
 
       }
       if ($(this).scrollTop() < 500) {
          $('.navbar').css('background','transparent');
          $('.navbar a').css('color', 'white');
         
       }
    });
 });




});