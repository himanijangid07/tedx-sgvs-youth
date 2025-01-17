(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonial carousel
    $(".testimonial-carousel-1").owlCarousel({
        loop: true,
        dots: false,
        margin: 25,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        autoplaySpeed: 10000,
        autoplayHoverPause: false,
        responsive: {
            0:{
                items:1
            },
            575:{
                items:1
            },
            767:{
                items:2
            },
            991:{
                items:3
            }
        }
    });

    $(".testimonial-carousel-2").owlCarousel({
        loop: true,
        dots: false,
        rtl: true,
        margin: 25,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        autoplaySpeed: 10000,
        autoplayHoverPause: false,
        responsive: {
            0:{
                items:1
            },
            575:{
                items:1
            },
            767:{
                items:2
            },
            991:{
                items:3
            }
        }
    });

})(jQuery);

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

function myFunction1() {
    var dots1 = document.getElementById("dots1");
    var moreText1 = document.getElementById("more1");
    var btnText1 = document.getElementById("myBtn1");
  
    if (dots1.style.display === "none") {
      dots1.style.display = "inline";
      btnText1.innerHTML = "Read more";
      moreText1.style.display = "none";
    } else {
      dots1.style.display = "none";
      btnText1.innerHTML = "Read less";
      moreText1.style.display = "inline";
    }
  }

function myFunction2() {
    var dots2 = document.getElementById("dots2");
    var moreText2 = document.getElementById("more2");
    var btnText2 = document.getElementById("myBtn2");
  
    if (dots2.style.display === "none") {
      dots2.style.display = "inline";
      btnText2.innerHTML = "Read more";
      moreText2.style.display = "none";
    } else {
      dots2.style.display = "none";
      btnText2.innerHTML = "Read less";
      moreText2.style.display = "inline";
    }
  }

function myFunction3() {
    var dots3 = document.getElementById("dots3");
    var moreText3 = document.getElementById("more3");
    var btnText3 = document.getElementById("myBtn3");
  
    if (dots3.style.display === "none") {
      dots3.style.display = "inline";
      btnText3.innerHTML = "Read more";
      moreText3.style.display = "none";
    } else {
      dots3.style.display = "none";
      btnText3.innerHTML = "Read less";
      moreText3.style.display = "inline";
    }
  }

function myFunction4() {
    var dots4 = document.getElementById("dots4");
    var moreText4 = document.getElementById("more4");
    var btnText4 = document.getElementById("myBtn4");
  
    if (dots4.style.display === "none") {
      dots4.style.display = "inline";
      btnText4.innerHTML = "Read more";
      moreText4.style.display = "none";
    } else {
      dots4.style.display = "none";
      btnText4.innerHTML = "Read less";
      moreText4.style.display = "inline";
    }
  }

function myFunction5() {
    var dots5 = document.getElementById("dots5");
    var moreText5 = document.getElementById("more5");
    var btnText5 = document.getElementById("myBtn5");
  
    if (dots5.style.display === "none") {
      dots5.style.display = "inline";
      btnText5.innerHTML = "Read more";
      moreText5.style.display = "none";
    } else {
      dots5.style.display = "none";
      btnText5.innerHTML = "Read less";
      moreText5.style.display = "inline";
    }
  }

function myFunction6() {
    var dots6 = document.getElementById("dots6");
    var moreText6 = document.getElementById("more6");
    var btnText6 = document.getElementById("myBtn6");
  
    if (dots6.style.display === "none") {
      dots6.style.display = "inline";
      btnText6.innerHTML = "Read more";
      moreText6.style.display = "none";
    } else {
      dots6.style.display = "none";
      btnText6.innerHTML = "Read less";
      moreText6.style.display = "inline";
    }
  }

function myFunction7() {
    var dots7 = document.getElementById("dots7");
    var moreText7 = document.getElementById("more7");
    var btnText7 = document.getElementById("myBtn7");
  
    if (dots7.style.display === "none") {
      dots7.style.display = "inline";
      btnText7.innerHTML = "Read more";
      moreText7.style.display = "none";
    } else {
      dots7.style.display = "none";
      btnText7.innerHTML = "Read less";
      moreText7.style.display = "inline";
    }
  }

function myFunction8() {
    var dots8 = document.getElementById("dots8");
    var moreText8 = document.getElementById("more8");
    var btnText8 = document.getElementById("myBtn8");
  
    if (dots8.style.display === "none") {
      dots8.style.display = "inline";
      btnText8.innerHTML = "Read more";
      moreText8.style.display = "none";
    } else {
      dots8.style.display = "none";
      btnText8.innerHTML = "Read less";
      moreText8.style.display = "inline";
    }
  }

function myFunction9() {
    var dots9 = document.getElementById("dots9");
    var moreText9 = document.getElementById("more9");
    var btnText9 = document.getElementById("myBtn9");
  
    if (dots9.style.display === "none") {
      dots9.style.display = "inline";
      btnText9.innerHTML = "Read more";
      moreText9.style.display = "none";
    } else {
      dots9.style.display = "none";
      btnText9.innerHTML = "Read less";
      moreText9.style.display = "inline";
    }
  }

function myFunction10() {
    var dots10 = document.getElementById("dots10");
    var moreText10 = document.getElementById("more10");
    var btnText10 = document.getElementById("myBtn10");
  
    if (dots10.style.display === "none") {
      dots10.style.display = "inline";
      btnText10.innerHTML = "Read more";
      moreText10.style.display = "none";
    } else {
      dots10.style.display = "none";
      btnText10.innerHTML = "Read less";
      moreText10.style.display = "inline";
    }
  }

function myFunction11() {
    var dots11 = document.getElementById("dots11");
    var moreText11 = document.getElementById("more11");
    var btnText11 = document.getElementById("myBtn11");
  
    if (dots11.style.display === "none") {
      dots11.style.display = "inline";
      btnText11.innerHTML = "Read more";
      moreText11.style.display = "none";
    } else {
      dots11.style.display = "none";
      btnText11.innerHTML = "Read less";
      moreText11.style.display = "inline";
    }
  }

function myFunction12() {
    var dots12 = document.getElementById("dots12");
    var moreText12 = document.getElementById("more12");
    var btnText12 = document.getElementById("myBtn12");
  
    if (dots12.style.display === "none") {
      dots12.style.display = "inline";
      btnText12.innerHTML = "Read more";
      moreText12.style.display = "none";
    } else {
      dots12.style.display = "none";
      btnText12.innerHTML = "Read less";
      moreText12.style.display = "inline";
    }
  }

function myFunction13() {
    var dots13 = document.getElementById("dots13");
    var moreText13 = document.getElementById("more13");
    var btnText13 = document.getElementById("myBtn13");
  
    if (dots13.style.display === "none") {
      dots13.style.display = "inline";
      btnText13.innerHTML = "Read more";
      moreText13.style.display = "none";
    } else {
      dots13.style.display = "none";
      btnText13.innerHTML = "Read less";
      moreText13.style.display = "inline";
    }
  }

function myFunction14() {
    var dots14 = document.getElementById("dots14");
    var moreText14 = document.getElementById("more14");
    var btnText14 = document.getElementById("myBtn14");
  
    if (dots14.style.display === "none") {
      dots14.style.display = "inline";
      btnText14.innerHTML = "Read more";
      moreText14.style.display = "none";
    } else {
      dots14.style.display = "none";
      btnText14.innerHTML = "Read less";
      moreText14.style.display = "inline";
    }
  }

function myFunction15() {
    var dots15 = document.getElementById("dots15");
    var moreText15 = document.getElementById("more15");
    var btnText15 = document.getElementById("myBtn15");
  
    if (dots15.style.display === "none") {
      dots15.style.display = "inline";
      btnText15.innerHTML = "Read more";
      moreText15.style.display = "none";
    } else {
      dots15.style.display = "none";
      btnText15.innerHTML = "Read less";
      moreText15.style.display = "inline";
    }
  }

function myFunction16() {
    var dots16 = document.getElementById("dots16");
    var moreText16 = document.getElementById("more16");
    var btnText16 = document.getElementById("myBtn16");
  
    if (dots16.style.display === "none") {
      dots16.style.display = "inline";
      btnText16.innerHTML = "Read more";
      moreText16.style.display = "none";
    } else {
      dots16.style.display = "none";
      btnText16.innerHTML = "Read less";
      moreText16.style.display = "inline";
    }
  }