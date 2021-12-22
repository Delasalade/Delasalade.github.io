$("video").hover( function() {
    $(this).closest('div').find(".play1,.play2").toggleClass("blur");
});

$("video").click(function() {
    $(this).closest('div').find(".play1,.play2").toggleClass("disappear");
});
