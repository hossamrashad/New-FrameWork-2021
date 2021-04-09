/* jslint plusplus: true, evil:true */
/*global $, jQuery, document, window, alert, prompt, confirm */
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

//
// typed js
$(function () {
  "use strict";

  var typed = new Typed(".cayan", {
    // Waits 1000ms after typing "First"
    strings: ["First ^1000 sentence.", "Second sentence.", "yes"],
    typeSpeed: 100,
    loop: true,
    startDelay: 1000,
    backDelay: 1000,
    cursorChar: "|",
    showCursor: true,
  });
});

//mixitup
$(document).ready(function () {
  "use strict";
  var mixer = mixitup(".box-list");
});

// gmaps
var map = new GMaps({ el: ".jq-map", lat: 29.993663, lng: 31.222816 });
