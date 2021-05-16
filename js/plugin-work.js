/*jslint plusplus: true, evil: true */
// jslint plusplus: true for error for ++
// evil: true for error document.write

/*global console , alert , prompt , $ , document, write, ADSAFE, report, jslint, bitwise, node*/

/*property charAt, slicexs*/

/*jslint browser: true */
/*global window */

/**
 * dynamic tabs
 *
 * typed js
 *
 * mixitup
 *
 * gmaps
 *
 *
 */


$(document).ready(function () {
  "use strict";
  // wow

  // new WOW().init();

  // nice scroll
  $(function () {
    $("html").niceScroll({
      cursorcolor: "#ecf0f1",
      cursorwidth: "12px",
      cursorborder: "3px solid #34495e",
      cursorborderradius: "10px",
      scrollspeed: "60",
    });
  });
  // owl
  // $(".owl-carousel").owlCarousel({
  //   loop: true,
  //   margin: 10,
  //   nav: true,
  //   dots: false,
  //   autoplay: true,
  //   smartSpeed: 1000,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     600: {
  //       items: 1,
  //     },
  //     1000: {
  //       items: 3,
  //     },
  //   },
  // });

  
  // circle
  // $(function () {
  //   $(".circlechart").circlechart();
  // });
});



// magnific
$(document).ready(function () {
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
});


// show and hide box
// show-hide-box
$(function () {
  $(".jq-show-hide-box").expandable({
    height: 250,
    expand_responsive: 768,
  });
});

// form validateMini
$("form").validateMini({
  validates: {
    strong: (params, value) => {
      return (
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/.test(value) ||
        "A Strong Password Required"
      );
    },
  },
});

// background move
$(document).ready(function () {
  "use strict";
  $(".jq-backmove").backgroundMove({
    movementStrength: "50",
  });
});

// snake
$(".jq-snake").snakeify({
  speed: 200,
});



$(document).ready(function () {
  "use strict";
  $(".jq-timer").countTo({
    from: 50,
    to: 2500,
    speed: 2000,
    refreshInterval: 50,
  });
});





//
// typed js
// $(function () {
//   "use strict";

//   var typed = new Typed(".text-write", {
//     // Waits 1000ms after typing "First"
//     strings: ["بحبك.", "وانتى كمان ", "بتحبينى"],
//     typeSpeed: 100,
//     loop: true,
//     startDelay: 1000,
//     backDelay: 1000,
//     cursorChar: "|",
//     showCursor: true,
//   });
// });

// mixitup

// $(document).ready(function () {

//   "use strict";

//   var mixer = mixitup(".box-list");

// });

// gmaps
// var map = new GMaps({ el: ".jq-map", lat: 29.993663, lng: 31.222816 });


