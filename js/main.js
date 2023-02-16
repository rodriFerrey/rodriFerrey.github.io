// Boton Ir arriba
$(document).ready(function(){
    $('.up').hide();

    $(window).scroll(function(){
        if($(this).scrollTop() > 200){
            $('.up').fadeIn('150');
        } else{
            $('.up').fadeOut('150');
        }
    });

    $('.up').click(function(){
        $('body, html').animate()
            scrollTop: 0
    });
});

// Easy Tabs

(function($) {
    "use strict";
        
    // Easytab setup	
    
    $('#wrapper').easytabs({
        animate			: true,
        updateHash		: false,
        transitionIn	:'fadeIn',
        transitionOut	:'fadeOut',
        animationSpeed	:100,
        tabActiveClass	:'active',
        tabs            :' #main-nav.tabbed > ul > li ',
        transitionInEasing: 'linear',
        transitionOutEasing: 'linear'	
    
    });
})(jQuery);


// Scroll to top button

$(document).ready(function(){
    $('.up').hide();

    $(window).scroll(function(){
        if($(this).scrollTop() > 200){
            $('.up').fadeIn('150');
        } else{
            $('.up').fadeOut('150');
        }
    });

    $('.up').click(function(){
        $('body, html').animate({
            scrollTop: 0
        })
            
    });

});

  
// Scroll to top onclick tabs

$(document).ready(function(){
        
    $('.main-nav li a').click(function(){
        $('body, html').animate({
            scrollTop: 0
        })
            
    });

});
