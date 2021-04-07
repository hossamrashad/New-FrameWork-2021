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
