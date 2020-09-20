$(document).ready(function () {
    // Our Student Work Section Slider
    $('#our-student-section-slide-area').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 2000,
		infinite: true,
        autoplay: true,
        arrows: true,
        draggable: false,
       // autoplaySpeed: 3000,
	prevArrow: $('#curriculam-section-slider-prev-button'),
        nextArrow: $('#curriculam-section-slider-next-button'),
    });



    // Curriculam Section Slider

    $('#curriculam-section-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        speed: 1000,
        arrows: true,
        draggable: false,
        prevArrow: $('#curriculam-section-slider-prev-button'),
        nextArrow: $('#curriculam-section-slider-next-button'),
    });



    // Student Quote Section Slider

    
    $('#student-quote-slider').slick({
        centerMode: true,
        centerPadding: '47rem',
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        speed: 1000,
        arrows: false,
        draggable: false,
        autoplay: true,
        autoplaySpeed: 3500        
    });



    // Flip by click

    $('.curriculam-learn-more-btn').click(function () {
        $(this).parents('.front').css({
            'transform': 'perspective(1000px) rotateY(180deg)',
            '-webkit-transform': 'perspective(1000px) rotateY(180deg)',
            '-moz-transform': 'perspective(1000px) rotateY(180deg)',
            '-ms-transform': 'perspective(1000px) rotateY(180deg)',
            '-o-transform': 'perspective(1000px) rotateY(180deg)',
            "transition": "0.7s"
        });

        $(this).parents('.sub').children('.back').css({
            'transform': 'perspective(1000px) rotateY(0deg)',
            '-webkit-transform': 'perspective(1000px) rotateY(0deg)',
            '-moz-transform': 'perspective(1000px) rotateY(0deg)',
            '-ms-transform': 'perspective(1000px) rotateY(0deg)',
            '-o-transform': 'perspective(1000px) rotateY(0deg)',
            "transition": "0.7s"
        });








    });

    //  flip by mouseout

    $('#curriculam-section-slider .slider-item .box .sub .back').mouseout(function () {

        $(this).parents('.sub').children('.front').css({
            'transform': 'perspective(1000px) rotateY(0deg)',
            '-webkit-transform': 'perspective(1000px) rotateY(0deg)',
            '-moz-transform': 'perspective(1000px) rotateY(0deg)',
            '-ms-transform': 'perspective(1000px) rotateY(0deg)',
            '-o-transform': 'perspective(1000px) rotateY(0deg)',
            "transition": "0.7s"
        });

        $(this).css({
            'transform': 'perspective(1000px) rotateY(-180deg)',
            '-webkit-transform': 'perspective(1000px) rotateY(-180deg)',
            '-moz-transform': 'perspective(1000px) rotateY(-180deg)',
            '-ms-transform': 'perspective(1000px) rotateY(-180deg)',
            '-o-transform': 'perspective(1000px) rotateY(-180deg)',
            "transition": "0.7s"
        });

        // solution for P

        $('#curriculam-section-slider .slider-item .box .sub .back p').mouseover(function () {
            $(this).parents('.back').css({
                'transform': 'perspective(1000px) rotateY(0deg)',
                '-webkit-transform': 'perspective(1000px) rotateY(0deg)',
                '-moz-transform': 'perspective(1000px) rotateY(0deg)',
                '-ms-transform': 'perspective(1000px) rotateY(0deg)',
                '-o-transform': 'perspective(1000px) rotateY(0deg)'
            });

            $(this).parents('.sub').children('.front').css({
                'transform': 'perspective(1000px) rotateY(180deg)',
                '-webkit-transform': 'perspective(1000px) rotateY(180deg)',
                '-moz-transform': 'perspective(1000px) rotateY(180deg)',
                '-ms-transform': 'perspective(1000px) rotateY(180deg)',
                '-o-transform': 'perspective(1000px) rotateY(180deg)'
            });

        });

    });
	
	
	
	
	
	

    //FAQ section accordion




    $('#faq .acc .top>.active-icon').click(function () {
        $(this).parents('.item').children('.acc-body').slideToggle(200);

        $(this).parents('.item').toggleClass('active');
        $(this).toggleClass('active');

    });


});