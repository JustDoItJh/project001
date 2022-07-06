$(function(){

    /**
     * 메뉴 업 다운
     * 
     * @version 1.0.0
     * @since 2022-01-16
     * @author 본인이름 (Nico)
     */
    lastScroll = 0;

    $(window).scroll(function(){
        currScroll = $(this).scrollTop();

        
        if(currScroll > 0) {
            $('.header .inner').addClass('active')
        } else {
            $('.header .inner').removeClass('active')
        }

        if(currScroll > lastScroll) {
            $('.header .inner').addClass('hide')
        } else {
            $('.header .inner').removeClass('hide')
        }

        lastScroll = currScroll

    })


    // Menu Button
    

    $('.menu-btn').click(function(){
        // $('.nav-area').animate({'left':0},300)
        $('.group-menu').addClass('active')
    })

    $('.close-btn').click(function(){
        // $('.nav-area').animate({'left':'-100%'},300)
        $('.group-menu').removeClass('active')
    })
    


    // More Button
    
    $('.btn-more').click(function(){
        $('#hide-text').slideToggle();

        if($(this).hasClass('active')){
            $(this).removeClass('active')
            $('.btn-more span').html('<em>Re</em>ad more about us');
        } else {
            $(this).addClass('active')
            $('.btn-more span').html('Less');
        }
        
    });
    


    // Mouse Cursor drag
    const circle = $('.circle').width()/2;

    $('.main-wrap').mousemove(function(e){

        // 모션 라이브러리
        $('.circle').show();
        gsap.to('.circle',0.8,{
            x: e.clientX - circle,
            y: e.clientY - circle
        })

    });


    const cursorWidth2 = $('.cursor-explore').width()/2;
    const cursorHeight2 = $('.cursor-explore').height()/2;
    $('.video-wrap').mousemove(function(e){

        $('.circle').addClass('hide');
        gsap.to('.cursor-explore',0.8,{
            x: e.offsetX - cursorWidth2,
            y: e.offsetY - cursorHeight2
        })

    });


});
