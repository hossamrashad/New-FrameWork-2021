/*jslint plusplus: true, evil: true */
// jslint plusplus: true for error for ++
// evil: true for error document.write

/*global console , alert , prompt , $ , document, write, ADSAFE, report, jslint, bitwise, node*/

/*property charAt, slicexs*/

/*jslint browser: true */
/*global window */

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

// start section loading
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

// menu-Plus

function openMenu() {
    const menu = document.querySelector(".menu-Plus");

    menu.classList.toggle("open");
}

// navbar
$(document).ready(function () {
    "use strict";

    $(window).scroll(function () {
        $("nav").toggleClass("css-nav-scroll", $(this).scrollTop() > 100);
    });
});

// dynamic tabs
$(document).ready(function () {
    "use strict";

    $(".tabs-list li").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");

        //console.log($(this).data("content"));

        $(".content-list > div").hide();

        $($(this).data("content")).fadeIn();
    });
});
