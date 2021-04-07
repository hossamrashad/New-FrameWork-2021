/* jslint plusplus: true, evil:true */
/* global $, jQuery, document, window, alert, prompt, confirm */

$(document).ready(function () {
    "use strict";

    $(".fixed-menu-icon .fa-bars").on("click", function () {
        $(".fixed-menu").toggleClass(".opacity-menu");
        if ($(".fixed-menu").hasClass(".opacity-menu")) {
            $(".fixed-menu").animate(
                {
                    opacity: 1,
                },
                500
            );
        } else {
            $(".fixed-menu").animate(
                {
                    opacity: 0,
                },
                500
            );
        }
    });
});
