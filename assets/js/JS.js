$(function(){
    
    let lastScroll = 0;

    $(window).scroll(function(){

                
        curr = $(this).scrollTop();

        if (curr > lastScroll) {
            $('header').addClass('hide')
            
        } else {
            $('header').removeClass('hide')
        }
        lastScroll = curr;

    })

    
    $('.header .btn-menu').click(function(){
        $('.side-nav').addClass('on')
        $('body').addClass('hidden')

    })

    $('.side-nav .close').click(function(){
        $('.side-nav').removeClass('on')
        $('body').removeClass('hidden')
    })


    $('.side-nav .menu-headline').click(function(){
        $(this).toggleClass('on').siblings('.sub-list').slideToggle(200)
    })


    

    $('.gnb-item').hover(function(){
        if($(this).children('.gnb-sub').length > 0){ //내가 마우스올린거의 자식 SUB태그가 있을때
            $('.header').addClass('on')
            $(this).children('.gnb-sub').addClass('on')
        }
    },function(){
        $('.gnb-sub').removeClass('on');
        $('.header').removeClass('on')
    })


    $('.header .gnb-sub li').hover(function(){
        $(this).addClass('on').siblings().removeClass('on')
    },function(){
        $('.header .gnb-sub li:first-child').addClass('on').siblings().removeClass('on')
    })









    var swiper = new Swiper(".main-slide", {
        pagination: {
          el: ".swiper-pagination",
        },
        loop: true,
      });



    //   제이쿼리 비디오 정지
    $('.sc-vision .video-area .btn-control').click(function(){

        if($(this).hasClass('on')){//있다면 또
            $('.sc-vision video').get(0).play();
            $('.sc-vision .btn-play').removeClass('on').siblings().addClass('on');
        }else{ //없다면 첫
            $('.sc-vision video').get(0).pause();
            $('.sc-vision .btn-pause').removeClass('on').siblings().addClass('on');
        }
        $(this).toggleClass('on');
    })


 
    $('.footer .btn').click(function(e){

        $('.footer .site-area').toggleClass('on');

    })

})