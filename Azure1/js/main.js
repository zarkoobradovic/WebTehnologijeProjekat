
$(document).ready(function () {


    /*podesavanje navbara*/


    $(window).on("scroll", function () {

        if ($(this).scrollTop() > 90) {
            $(".navbar").addClass("navbar-shrink");
        }
        else {
            $(".navbar").removeClass("navbar-shrink");
        }

    });


    /************************Navbar collapse************** */

    $(".nav-link").on("click", function () {

        $(".navbar-collapse").collapse("hide");
    });








    /*klikom na dugme da se pusta video*/
    const video_ = $("#player").attr("src");
    $(".video-play-btn, .video-popup").on("click", function () {

        if ($(".video-popup").hasClass("open")) {
            $(".video-popup").removeClass("open");
            $("#player").attr("src", "");
        }
        else {
            $(".video-popup").addClass("open");
            if ($("#player").attr("src") == '') {
                $("#player").attr("src", video_);
            }

        }
    });


    /* za dark pozadinu*/
    function toggleTheme() {
        updateIcon();
    }
    toggleTheme();
    $(".toggle-theme").on("click", function () {
        $("body").toggleClass("dark");
        if ($("body").hasClass("dark")) {
            localStorage.setItem("shala-theme", "dark");
        }
        else {
            localStorage.setItem("shala-theme", "light");

        }
        updateIcon();
    });
    function updateIcon() {
        if ($("body").hasClass("dark")) {
            $(".toggle-theme i").removeClass("fa-moon-o");
            $(".toggle-theme i").addClass("fa-sun-o");
        } else {
            $(".toggle-theme i").removeClass("fa-sun-o");
            $(".toggle-theme i").addClass("fa-moon-o");
        }
    }

});


