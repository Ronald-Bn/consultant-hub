$(window).on('load', function () {
    $(".content").fadeIn(1000);

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
    $(".nav-links").click(function () {
        $("#myNav").css('width', '0%');
    });

    $(".closebtn").click(function () {
        $("#myNav").css('width', '0%');
    });
});


$(document).ready(function () {
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4,#nav-icon5').click(function () {
        $(this).toggleClass('open');
        $('.closebtn').addClass('open');
    });

    $('.closebtn').click(function () {
        $('#nav-icon1').removeClass('open');
    });


});

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

// function closeNav() {
//     document.getElementById("myNav").style.width = "0%";
//     console.log('clicked');
// }

