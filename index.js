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

// $(document).ready(function () {
//     $("a").click(function () {
//         closeNav();
//     });
// });

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    console.log('clicked');
}

