/*jslint plusplus: true, evil: true */
// jslint plusplus: true for error for ++
// evil: true for error document.write

/*global console , alert , prompt , $ , document, write, ADSAFE, report, jslint, bitwise, node*/

/*property charAt, slicexs*/

/*jslint browser: true */
/*global window */

/**
 * nice scroll
 * 
 * Wow
 *
 * Owl
 *
 * magnific
 *
 * snake
 *
 * show and hide box
 *
 * gmaps
 *
 * FitText
 *
 * nivo slide
 *
 * mixitup
 * 
 * typed js
 *
 * mousewheel for owl
 *
 *
 *
 */

// $(document).ready(function () {
//   "use strict";

// nice scroll
// $(function () {
//   $("html").niceScroll({
//     cursorcolor: "#ecf0f1",
//     cursorwidth: "12px",
//     cursorborder: "3px solid #34495e",
//     cursorborderradius: "10px",
//     scrollspeed: "60",
//   });
// });

// });

// circle
// $(function () {
//   $(".circlechart").circlechart();
// });
// });

// form validateMini
// $("form").validateMini({
//   validates: {
//     strong: (params, value) => {
//       return (
//         /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/.test(value) ||
//         "A Strong Password Required"
//       );
//     },
//   },
// });

// background move
// $(document).ready(function () {
//   "use strict";
//   $(".jq-backmove").backgroundMove({
//     movementStrength: "50",
//   });
// });



// window.onload = (function () {
$(document).ready(function () {
  "use strict";

  // wow
  new WOW().init();

  // owl
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // magnific
  $(".jq-magnific-image").magnificPopup({
    type: "image",
  });

  $(".jq-magnific-gallery").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  $(".jq-magnific-video").magnificPopup({
    type: "iframe",
  });

  // snake
  $(".jq-snake").snakeify({
    speed: 200,
  });

  // show and hide box
  $(function () {
    $(".jq-show-hide-box").expandable({
      height: 250,
      expand_responsive: 768,
    });
  });

  // gmaps
  var map = new GMaps({ el: ".jq-map", lat: 30.039977, lng: 31.219695 });

  // FitText
  $(".jq-fittext").fitText(1.2, { minFontSize: "20px", maxFontSize: "30px" });

  // nivo slide

  $(".slider-active").nivoSlider({
    // points
    controlNav: true,
    // angle left & right
    directionNav: true,
    randomStart: true,
    controlNavThumbs: false,
    animSpeed: 500,
    pauseTime: 5000,
    pauseOnHover: false,
    manualAdvance: false,
    prevText: '<i class="fas fa-angle-left"></i>',
    nextText: '<i class="fas fa-angle-right"></i>',
    slices: 15,
    boxCols: 8,
    boxRows: 4,

    // effect: "random",

    // startSlide: 0,

    // beforeChange: function () {},
    // afterChange: function () {},
    // slideshowEnd: function () {},
    // lastSlide: function () {},
    // afterLoad: function () {},
  });

  // mixitup
  var mixer = mixitup(".portfolio-item", {
    animation: {
      duration: 300,
      effectsOut: "fade translateX(-100%)",
    },
  });

  // countTo
  $(".jq-countTo").countTo({
    from: 50,
    to: 2500,
    speed: 3000,
    refreshInterval: 50,
  });

  // typed js
$(function () {
  "use strict";

  var typed = new Typed(".jq-typed-text", {
    // Waits 1000ms after typing "First"
    strings: ["rovan.", " Hossam ", "Rashad"],
    typeSpeed: 100,
    startDelay:5000,
    backDelay: 1000,
    loop: true,
    // loopCount:3, == Number of loop
    loopCount: false,
    cursorChar: '<i class="fas fa-angle-left"></i>',
    showCursor: true,
  });
});

// mousewheel owl-carousel
$(".owl-carousel").on("mousewheel", ".owl-stage", function (e) {
  if (e.deltaY > 0) {
    $(".owl-carousel").trigger("next.owl");
  } else {
    $(".owl-carousel").trigger("prev.owl");
  }
  e.preventDefault();
});

});
// end
