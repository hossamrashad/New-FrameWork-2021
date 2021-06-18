/*jslint plusplus: true, evil: true */
// jslint plusplus: true for error for ++
// evil: true for error document.write

/*global console , alert , prompt , $ , document, write, ADSAFE, report, jslint, bitwise, node*/

/*property charAt, slicexs*/

/*jslint browser: true */
/*global window */

/**
 *
 * Window Height
 *
 * Window Height / 2
 *
 * fixed menu
 *
 * button scroll to top
 *
 *
 *
 *
 *
 * menu-Plus
 *
 * jq-box-read-more
 */
// window height
$(function () {
  "use strict";
  // Window Height
  var windowH = $(window).height();

  $(".jq-window-height").height(windowH);

  $(window).resize(function () {
    $(".jq-window-height").height(windowH);
  });

  // Window Height / 2
  $(".jq-window-height-2").height(windowH / 2);

  $(window).resize(function () {
    $(".jq-window-height-2").height(windowH / 2);
  });
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

  // button scroll to top

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

  // start section loading
  $(".loading .spinner").fadeOut(2000, function () {
    $(this)
      .parent()
      .fadeOut(2000, function () {
        $(this).remove();
      });
  });

  // start PRELOADER
  (function () {
    $(window).ready(function () {
      $("#preloader").fadeOut(3000);
    });
  })();

  // start section loading
  $(".loading-parent .loading-child").fadeOut(2000, function () {
    $(this)
      .parent()
      .fadeOut(2000, function () {
        $(this).remove();
      });
  });

  // start section loading 3
  $(".loading-parent-3 .loader-child").fadeOut(2000, function () {
    $(this)
      .parent()
      .fadeOut(2000, function () {
        $(this).remove();
      });
  });

  // start section loading 4
  $(".loading-parent-4 .loader-child").fadeOut(2000, function () {
    $(this)
      .parent()
      .fadeOut(2000, function () {
        $(this).remove();
      });
  });

  // start section loading 5
  $(".loading-parent-5 .loader-child").fadeOut(2000, function () {
    $(this)
      .parent()
      .fadeOut(2000, function () {
        $(this).remove();
      });
  });

  // Popup
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

  // navbar background color
  $(window).scroll(function () {
    $("nav").toggleClass("css-nav-scroll", $(this).scrollTop() > 100);
  });

  // dynamic tabs
  $(".tabs-list li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");

    //console.log($(this).data("content"));

    $(".content-list > div").hide();

    $($(this).data("content")).fadeIn();
  });




  // section box haver
  $(document).on(
    "mouseover",
    ".css-section-haver-box-parent .column",
    function () {
      "use strict";
      $(this).addClass("active").siblings().removeClass("active");
    }
  );
});

// menu-Plus
function openMenu() {
  "use strict";
  const menu = document.querySelector(".menu-Plus");

  menu.classList.toggle("open");
}

// jq-box-read-more
function readmore() {
  "use strict";
  var blur = document.getElementById("jq-box-read-more");
  blur.classList.toggle("activeShow");
  // Show Popup
  var popupReadMore = document.getElementById("css-popup-box-read-more");
  popupReadMore.classList.toggle("activeShow");
}

// navbar change color
window.addEventListener("scroll", function () {
  var windowH = $(window).height();
  var nav = this.document.querySelector("nav");
  var windowPosition = this.window.scrollY > windowH;
  nav.classList.toggle('css-nav-change-color', windowPosition);
});

/* input direction */
$(function () {
  "use strict";
// add class to input
  $(".auto-direction").on("keyup", function () {
    if ($(this).val().charCodeAt(0) < 200) {
      $(this).css("direction", "ltr");
    } else {
      $(this).css("direction", "rtl");
    }
  });
});