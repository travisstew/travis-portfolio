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
             $('.slide').addClass('animated fadeIn slower delay-1s');
             $('.slide2').addClass('animated fadeIn slower delay-2s');
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

  
  // ======== link to portfolio projects =======
  
   $('.portfolio-div div').on('click', function(){
        window.location.href = 'https://www.yahoo.com/'

   })
   

              // ======= responsive navbar =========
   $('.toggle-button').on('click', function () {
     
    //      $('.menu').css({'display':'grid','background':'#343A45'});
    //  $('nav').css({'background':'#343A45','color':'white'});
    //  $('.toggle-button .bar').css({'background-color':'white'});
    //  $('nav a').css('color', 'white');
    //  $('li').css({'text-align':'start','padding-top':'1rem','padding-botton':'1rem', 'padding-left':'1rem'});
         $('.menu').toggleClass('menu1')
     $('nav').toggleClass('nav1')
     $('span').toggleClass('bar1');
     $('nav a').toggleClass('span1')
     $('li').toggleClass('li');
    
     });
  

       
  });

// }