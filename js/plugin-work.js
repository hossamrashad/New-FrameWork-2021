/* jslint plusplus: true, evil:true */
/*global $, jQuery, document, window, alert, prompt, confirm */
$(document).ready(function () {
  "use strict";
  // wow
  new WOW().init();
  // nice scroll
  $(function () {
    $("body").niceScroll();
  });
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
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  });

  // circle
  // $(function () {
  //   $(".circlechart").circlechart();
  // });
});

// button scroll to top
$(document).ready(function () {
  "use strict";
  $(window).scroll(function () {
    var buttonScroll = $(".scroll-to-top");
    if ($(window).scrollTop() >= 500) {
      if (buttonScroll.is(":hidden")) {
        buttonScroll.fadeIn(400);
      }
    } else {
      buttonScroll.fadeOut(400);
    }
  });
  $(".scroll-to-top").click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });
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

// start section loading
$(document).ready(function () {
  "use strict";

  $(".loading .spinner").fadeOut(2000, function () {
    $(this)
      .parent()
      .fadeOut(2000, function () {
        $(this).remove();
      });
  });
});
// end section loading

// start PRELOADER
$(document).ready(function () {
  "use strict";
  (function ($) {
    $(window).ready(function () {
      $("#preloader").fadeOut(3000);
    });
  })(jQuery);
});
// end PRELOADER

// start section loading 2
$(document).ready(function () {
  "use strict";

  $(".loading-parent .loading-child").fadeOut(2000, function () {
    $(this)
      .parent()
      .fadeOut(2000, function () {
        $(this).remove();
      });
  });
});
// end section loading 2

// start section loading 3
$(document).ready(function () {
  "use strict";

  $(".loading-parent-3 .loader-child").fadeOut(2000, function () {
    $(this)
      .parent()
      .fadeOut(2000, function () {
        $(this).remove();
      });
  });
});
// end section loading 3

// start section loading 4
$(document).ready(function () {
  "use strict";

  $(".loading-parent-4 .loader-child").fadeOut(2000, function () {
    $(this)
      .parent()
      .fadeOut(2000, function () {
        $(this).remove();
      });
  });
});
// end section loading 4

// start section loading 5
$(document).ready(function () {
  "use strict";

  $(".loading-parent-5 .loader-child").fadeOut(2000, function () {
    $(this)
      .parent()
      .fadeOut(2000, function () {
        $(this).remove();
      });
  });
});
// end section loading 5

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

// gmaps
// var map = new GMaps({ el: ".jq-map", lat: 29.993663, lng: 31.222816 });

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
