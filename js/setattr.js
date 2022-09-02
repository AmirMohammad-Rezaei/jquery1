$(document).ready(function () {
    $("button").click(function () {
        var text = $(this).text();
        $(this).attr("href", function (i, old) {
            return old + text;
        });
        var link =$(this).attr("href");
        window.location.replace(link);
        // alert(link);

    });
});