(function($) {
    "use strict";

    // Page loading animation
    $(window).on("load", function() {
        $("#js-preloader").addClass("loaded");
    });
    // Menu Dropdown Toggle
    if ($(".menu-trigger").length) {
        $(".menu-trigger").on("click", function() {
            $(this).toggleClass("active");
            $(".header-area .nav").slideToggle(200);
        });
    }
})(window.jQuery);