$(document).ready(function () {
    var $item = $(".carousel .item");
    var $wHeight = $(window).height();
    
    $item.height($wHeight);
    $item.addClass("fullscreen");
    
    /*$("h3").attr({"data-toggle": "tooltip", "title": "Посмотреть на карте"});
    $("h3").on("click", function() {
        window.location = "park.html"
    });*/
    
    $(".carousel img").each(function() {
        var $src = $(this).attr("src");
        $(this).parent().css({
            "background-image": "url(" + $src + ")",
            "cursor": "pointer"
        });
        $(this).parent().on("click", function() {
            window.location = "park.html"
        })
        $(this).remove();
    });

    $(window).on("resize", function (){
      $wHeight = $(window).height();
      $item.height($wHeight);
    });
});