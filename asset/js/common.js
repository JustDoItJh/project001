var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.list-wrap').outerHeight();

$(window).scroll(function(e){
    didScroll = true
});

setInterval(function(){

    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }

}, 250);

function hasScrolled(){
    var st = $(this).scrollTop();

    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    if(st > lastScrollTop && st > navbarHeight){
        
        $('.list-wrap').removeClass('nav-down').addClass('nav-up');

    } else {
        
        if(st + $(window).height() < $(document).height()) {
            $('.list-wrap').removeClass('nav-up').addClass('nav-down');
        }

    }

    lastScrollTop = st;
}


// AOS Plugin
$( document ).ready( function() {
    AOS.init();
  } );