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
    

    $('.btn-menu').click(function(){
        // $('.group-menu').animate({'left':0},300)
        $('.group-menu').addClass('active')
    })

    $('.btn-close').click(function(){
        // $('.group-menu').animate({'left':'-100%'},300)
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
    


});
