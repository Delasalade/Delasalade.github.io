$("a.item").click(function() {
    $( ".carrétransparent" ).addClass("fadein");
    var href = $(this).attr('href');
    setTimeout(function() {
        window.location = href
    }, 1500);
    return false;
});