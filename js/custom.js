
$(function () {

    $(window).on('scroll', function () {

        let sct = $(window).scrollTop();
        console.log(sct)

        if (sct > 0) {
            $('#header').addClass('on')
        } else {
            $('#header').removeClass('on')
        };
    });

    $('.mbtn').on('click', function () {
        $('.hd_wrap>*').toggleClass('on')
    });
    $('.gnb>ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on') && $(this).next().is('.sub_menu')) {
            e.preventDefault();
            $('.gnb>ul>li .sub_menu').stop().slideUp();
            $(this).next().stop().slideToggle();
        };
    });


    $(window).on('resize', function () {
        let ww = $(window).width();
        if (ww > 768) {
            $('.gnb').removeClass('on');
            $('.gnb>ul>li .sub_menu').removeAttr('style');
        }
    })


    const main_itm_slide = new Swiper('.main_itm_slide', {
        effect: "fade",
        slidesPerView: 1,
    });

    $('.main_visual .prev').on('click', function () {
        main_visual_slide.slidePrev();
    });

    $('.main_visual .next').on('click', function () {
        main_visual_slide.slideNext();
    });




    $('.main_itm .inner .left .itm_txt').on('click', function () {
        let idx = $(this).index();
        main_itm_slide.slideToLoop(idx)
        $('.main_itm .inner .left .itm_txt').removeClass('on');
        $(this).addClass('on');
    })

});