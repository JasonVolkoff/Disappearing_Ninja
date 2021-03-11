$(document).ready(function () {
    $("img").click(function () {
        $(this).toggle();
    })
    $("button").click(function () {
        $("img").show();
    })
})