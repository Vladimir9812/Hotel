$(function(){
        $('.season--winter').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true,
            autoplaySpeed: 4000,
            speed: 3000,
            prevArrow:'<img src="images/svg/left-arrow--winter.svg" alt="1" class="left-arrow--winter">',
            nextArrow: '<img src="images/svg/right-arrow--winter.svg" alt="2" class="right-arrow--winter">',
            responsive: [
            {
              breakpoint: 1000,
              settings: {
              arrows: false,
              }
            }
        ]
        });
    
        $('.season--summer').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 3000,
            prevArrow:'<img src="images/svg/left-arrow--summer.svg" alt="1" class="left-arrow--summer">',
            nextArrow: '<img src="images/svg/right-arrow--summer.svg" alt="2" class="right-arrow--summer">',
            responsive: [
            {
              breakpoint: 1000,
              settings: {
              arrows: false,
              }
            }
        ]
        });
        $('.reviews').slick({
            dots: true, 
            arrows: true, 
            slidesToShow: 3,
            slidesToScroll: 1,
              responsive: [
            {
              breakpoint: 1000,
              settings: {
              arrows: false,
              slidesToShow: 2,
              slidesToScroll: 1,
              }
            },
            {
              breakpoint: 550,
              settings: {
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1,
              }
            }
        ]
    });
});

$(function() {
	var header = $('#header');
	var intro = $('#main__page').innerHeight();
	var scrollOffSet = 0;
	
	$(window).on("scroll", function() {
		var scrollOffSet = $(this).scrollTop();
		
		if(scrollOffSet>=intro) {
			header.addClass('header--fixed');
		} else {
			header.removeClass('header--fixed');
		}

	});

	$('#nav__toggle').on('click',function(event) {
		event.preventDefault();
		
        $(this).toggleClass('active');
		$('#nav').toggleClass('active');
		$('header').toggleClass('active');

	})
});

//flowing-scroll
$("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
        blockId = $this.data('scroll'),
        blockOffset = $(blockId).offset().top -10;

    $("#nav a").removeClass("active");
    $this.addClass("active");

    $("html, body").animate({
        scrollTop:  blockOffset
    }, 2500);
});