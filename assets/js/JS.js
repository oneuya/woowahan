$(function(){



    // $('.gnb-item').hover(function(){

    //     $(this).closest('header').addClass('on')
    // },function(){
    //     $('.header').removeClass('on')

    // })

    
    $('.header .btn-menu').click(function(){
        $('.side-nav').addClass('on')

    })

    $('.side-nav .close').click(function(){
        $('.side-nav').removeClass('on')

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
        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: false,
        //   },
      });


    // var swiper = new Swiper(".marquee-slide", {
    //     speed:2000,
    //     slidesPerView:"auto",
    //     spaceBetween:8,
    //     loop: true,
    //     autoplay: {
    //         delay: 0,
    //         disableOnInteraction: false,
    //     },
        
    //   });

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

        // if(!$(this).hasClass('none')){ //내가 선택한 애가 none이라는 클레스가 없냐?
        //     e.preventDefault(); //링크이벤트막기

        //     // if($(this).hasClass('active')){ //클릭한게 active있냐>(또클릭)

        //     //     $('.footer .btn').removeClass('active'); //모든버튼 클레스다빼고
        //     //     $('.select').slideUp(); //모든 sub닫기

        //     // }else{ //active없냐? (첫클릭 )

        //     //     $('.footer .btn').removeClass('active');//모든버튼 클레스다빼고
        //     //     $(this).addClass('active'); //나만(btn-related)클레스 주기

        //     //     $('.select').slideUp(); //모든 sub닫고
        //     //     $(this).siblings('.select').slideDown(); //나만(btn-related)의 형제 .sub 열기
        //     // }

        // }
    })

})