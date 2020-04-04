$(document).ready(function () {

    if ($('body').innerWidth() > 840 ){
        
      $(window).scroll(function () {
            
         if ($(this).scrollTop() < 20) {
            $('nav a').css('color', '#5c5c5c');
            $('nav').css('background','	rgb(245,245,245)');
            $('nav').css('background', 'none');
            $('#nav-name a').css('color', '#4DA1A9');
            $('.slide').css('display','none');
            $('.slide2').css('display','none');
        
         }
         if ($(this).scrollTop() > 50) {
            $('nav').css('background','white');
            $('nav a').css('color', 'black');
            $('#nav-name a').css('color', '#4DA1A9');
            $('nav').css('padding-top', '1rem');
            $('nav').css('padding-bottom', '1rem');
         }
         // == project section scroll === //

         if($(this).scrollTop() > 830){
          $('.slide').css('display','flex');
          $('.slide2').css('display','flex');
             $('.slide').addClass('animated fadeIn slow ');
             $('.slide2').addClass('animated fadeIn slow delay-1s');
            $('.portfolio-div div').hover(function () {
            $(this).css('transform', 'scale(1.2)');
            $(this).css('box-shadow', '0 7px 4px #777');
            $(this).css('box-shadow', 'inset 0 0 0 100vw rgba(0,0,0,0.5)');
          }, function () {
            $(this).css('transform', 'scale(1.0)')
            $(this).css('box-shadow', '')
          });
        } 
      });

    }
    
 

 // ======= responsive navbar ========= //
   $('.toggle-button').on('click', function () {
     
     $('.menu').toggleClass('menu1')
     $('nav').toggleClass('nav1')
     $('span').toggleClass('bar1');
     $('nav a').toggleClass('span1')
     $('.menu li').toggleClass('li');
    
     });

     if ($('body').innerWidth() <= 420 ){
        $('div h1').removeClass("animated slideInLeft");
        $('div h2').removeClass("animated slideInLeft");
        $('div div').removeClass("animated slideInLeft");

     }
  
    
       
  });

// }