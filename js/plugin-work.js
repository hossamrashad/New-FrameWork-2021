/* jslint plusplus: true, evil:true */
/*global $, jQuery, document, window, alert, prompt, confirm */

// Window Height
$(function () {
  "use strict";
  var windowH = $(window).height();
  $(".jq-window-height").height(windowH);

  $(window).resize(function () {
    $(".jq-window-height").height(windowH);
  });
});

// Window Height / 2
$(function () {
  "use strict";
  var windowH = $(window).height();
  $(".jq-window-height-2").height(windowH / 2);

  $(window).resize(function () {
    $(".jq-window-height-2").height(windowH / 2);
  });
});

$(document).ready(function () {
  "use strict";
  // wow
  new WOW().init();
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

  // fixed menu
  $(document).ready(function () {
    "use strict";
    $(".fixed-menu-normal .fa-bars").on("click", function () {
      $(this).parent(".fixed-menu-normal").toggleClass("is-visible");
      if ($(this).parent(".fixed-menu-normal").hasClass("is-visible")) {
        $(this).parent(".fixed-menu-normal").animate(
          {
            right: 0,
          },
          300
        );
      } else {
        $(this).parent(".fixed-menu-normal").animate(
          {
            right: -150,
          },
          300
        );
      }
    });
    $(".fixed-menu-padding-body .fa-bars").on("click", function () {
      $(this).parent(".fixed-menu-padding-body").toggleClass("is-visible");
      if ($(this).parent(".fixed-menu-padding-body").hasClass("is-visible")) {
        $(this).parent(".fixed-menu-padding-body").animate(
          {
            right: 0,
          },
          300
        );
        $("body").animate(
          {
            paddingRight: "150px",
          },
          300
        );
      } else {
        $(this).parent(".fixed-menu-padding-body").animate(
          {
            right: -150,
          },
          300
        );
        $("body").animate(
          {
            paddingRight: 0,
          },
          300
        );
      }
    });
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

// popup
$(document).ready(function () {
  "use strict";

  $(document).ready(function () {
    "use strict";
    $(".btn-show-popup").click(function () {
      $($(this).data("popup")).fadeIn();
    });
    $(".popup").click(function () {
      $(this).fadeOut();
    });
    $(".popup .inner").click(function (e) {
      e.stopPropagation();
    });
    $(".popup .close").click(function (e) {
      e.preventDefault();
      $(this).parentsUntil(".popup").parent().fadeOut();
    });
    $(document).keydown(function (e) {
      if (e.keyCode == 27) {
        $(".popup").fadeOut();
      }
    });
  });
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
// menu-Plus
function openMenu() {
  const menu = document.querySelector(".menu-Plus");
  menu.classList.toggle("open");
}

$(function () {
  "use strict";

  var typed = new Typed(".text-write", {
    // Waits 1000ms after typing "First"
    strings: ["بحبك.", "وانتى كمان ", "بتحبينى"],
    typeSpeed: 100,
    loop: true,
    startDelay: 1000,
    backDelay: 1000,
    cursorChar: "|",
    showCursor: true,
  });
});
