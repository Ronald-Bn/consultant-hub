$(window).on('load', function () {
    $(".content").show();
});

$(document).on("scroll", function () {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".fade-left");

    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];

        if ($(tag).position().top < pageBottom) {
            $(tag).addClass("fade-in-left");
        } else {
            $(tag).removeClass("fade-in-left");
        }
    }
});

$(document).on("scroll", function () {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".fade-right");

    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];

        if ($(tag).position().top < pageBottom) {
            $(tag).addClass("fade-in-right");
        } else {
            $(tag).removeClass("fade-in-right");
        }
    }
});


$(document).ready(function () {
    $('#hamburger-icon').click(function () {
        $(this).toggleClass('open');
        $('.closebtn').addClass('open');
        $('body').css('overflow', 'hidden');
    });

    $(".nav-links").click(function () {
        $("#myNav").css('width', '0%');
        $('#hamburger-icon').removeClass('open');
        $('body').css('overflow', 'visible');
    });

    $(".closebtn").click(function () {
        $("#myNav").css('width', '0%');
        $('#hamburger-icon').removeClass('open');
        $('body').css('overflow', 'visible');
    });
});


function openNav() {
    document.getElementById("myNav").style.width = "100%";
}


