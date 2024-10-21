$(document).ready(function () {
    $("#button").click(function () {
        let selector = $("#selector").val();
        $(selector).hide();
    });
});