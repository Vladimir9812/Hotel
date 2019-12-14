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

//moving-block
  jQuery(document).ready(function($) {
    var mql = window.matchMedia('all and (max-width: 960px)');
      if (mql.matches) {
  $(window).scroll(function(){
      if  ($(window).scrollTop() > 300)
          $('#slidebox').animate({'right':'0vw'},800);

      });
      $('#slidebox .close').bind('click',function(){
          $(this).parent().remove();
      });
      } else {
         $(window).scroll(function(){
      if  ($(window).scrollTop() > 300)
          $('#slidebox').animate({'right':'3vw'},800);
      });
      }
    });

//title-animation
  var mal = window.matchMedia('all and (max-width: 450px)');
      if (!mal.matches) {
    let title = document.querySelector(".title");
  setTimeout(function () {
    title.classList.add("active");
  }, 1000);
  };
//swiper
    var swiper = new Swiper('.swiper-container', {
      speed: 600,
      parallax: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
