$("img, video").click(function() {
    $(this).toggleClass("turnshinepaused");
    $(this).toggleClass("scaled");
    $(this).closest('div').find("h6").toggleClass("appear");
});