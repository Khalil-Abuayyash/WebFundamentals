$(document).ready( function() {
    $("img").hover( 
        function() {
        $(this).attr("temp", $(this).attr("src"));
        $(this).attr("src", $(this).attr("data-alt-src"));
        $(this).attr("data-alt-src", $(this).attr("temp"));
    }, function () {
        $(this).attr("temp", $(this).attr("src"));
        $(this).attr("src", $(this).attr("data-alt-src"));
        $(this).attr("data-alt-src", $(this).attr("temp"));
    })
});