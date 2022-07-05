// AOS Plugin
$( document ).ready( function() {
    AOS.init();
  } );


// Scroll Down & Up
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.nav-wrap').outerHeight();

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
        
        $('.nav-wrap').removeClass('nav-down').addClass('nav-up');

    } else {
        
        if(st + $(window).height() < $(document).height()) {
            $('.nav-wrap').removeClass('nav-up').addClass('nav-down');
        }

    }

    lastScrollTop = st;
}

// Menu Button
$(function(){

    $('.menu-btn').click(function(){
        // $('.nav-area').animate({'left':0},300)
        $('.menu-wrap').addClass('active')
    })

    $('.close-btn').click(function(){
        // $('.nav-area').animate({'left':'-100%'},300)
        $('.menu-wrap').removeClass('active')
    })
})


// More Button
$(function(){
    $('.more').click(function(){
        $('#hide-text').slideToggle();
        $('.more span').text('Less');
    });
});


// Mouse Cursor drag
const circle = $('.circle').width()/2;

$('.main-wrap').mousemove(function(e){
    $('.circle').css('top', e.pageY - circle);
    $('.circle').css('left', e.pageX - circle);
    $('.circle').fadein();
});

$('.main-wrap').on('mouseleave', function(){
    $('.circle').fadeout();
})

