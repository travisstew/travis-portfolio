$(document).ready(function () {

//   $(function() {
//     $(window).scroll(function () {
//        if ($(this).scrollTop() > 515) {
//           $('.navbar a').css('color', 'black');
//           $('.navbar').css('background','	rgb(245,245,245)');
//           $('.burger-menu').css('background', 'black');
//        }
//        if ($(this).scrollTop() < 500) {
//           $('.navbar').css('background','transparent');
//           $('.navbar a').css('color', 'white');
//           $('.burger-menu').css('background', 'white');
//        }
//     });
//  });
  $(function() {
    $(window).scroll(function () {
       if ($(this).scrollTop() > 515) {
          $('.navbar a').css('color', 'black');
          $('.navbar').css('background','	rgb(245,245,245)');
          $('.burger-menu').css('background', 'black');
       }
       if ($(this).scrollTop() < 500) {
          $('.navbar').css('background','white');
          $('.navbar a').css('color', 'black');
          $('.burger-menu').css('background', 'white');
       }
    });
 });




});