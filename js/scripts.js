$(document).ready(function() {
    $(window).scroll(function() {
        $(".hideme").each(function() {
            var t = $(this).position().top + $(this).outerHeight(),
                i = $(window).scrollTop() + $(window).height();
            i > t && $(this).animate({
                opacity: "1"
            }, 500)
        })
    })
}), $(document).ready(function() {
    $("p").each(function() {
        var t = $(this).position().top + $(this).outerHeight(),
            i = $(window).scrollTop() + $(window).height();
        i > t && $(this).animate({
            opacity: "1"
        }, 500)
    }), $(window).scroll(function() {
        $("p").each(function() {
            var t = $(this).position().top + $(this).outerHeight(),
                i = $(window).scrollTop() + $(window).height();
            i > t && $(this).animate({
                opacity: "1"
            }, 500)
        })
    })
}), $(document).ready(function() {
    $("#menu").hide()
}), $(document).ready(function() {
    $("#top-nav-menu").click(function() {
        $("#menu").slideDown()
    })
}), $(document).ready(function() {
    $("#menu img").click(function() {
        $("#menu").slideUp()
    })
}), $(document).ready(function() {
    $("img").bind("mouseenter mouseleave", function() {
        $(this).attr({
            src: $(this).attr("data-other-src"),
            "data-other-src": $(this).attr("src")
        })
    })
}), $(document).ready(function(){
  $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 7000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
});