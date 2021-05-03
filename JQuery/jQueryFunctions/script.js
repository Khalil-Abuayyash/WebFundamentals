

$("document").ready( () => {
    $("#hide").click( () => {
        $("#hidep").hide();
    });
    $("#show").click( () => {
        $("#hidep").show();
    });
    $("#toggle").click( () => {
        $("#hidep").toggle();
    });
    $("#up").click( () => {
        $("#slide").slideUp();
    });
    $("#down").click( () => {
        $("#slide").slideDown();
    });
    $("#sToggle").click( () => {
        $("#slide").slideToggle();
    });
    $("#in").click( () => {
        $("#fade").fadeIn();
    });
    $("#out").click( () => {
        $("#fade").fadeOut();
    });
    $("#addClass").click( () => {
        $("#class").addClass("forever");
    });
    $("#hello").click( () => {
        $("#world").before("<p>Hello </P>");
    });
    $("#ugly").click( () => {
        $("#world").after("<p>is Ugly</p>");
    });
    $("#people").click( () => {
        $("#world").append("<p>is crowd of people</p>");
    });
    $("#bold").click( () => {
        $("#strong").html("<h2>Strong</h2>");
    });
})
