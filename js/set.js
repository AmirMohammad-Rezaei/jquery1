$(document).ready(function () {
    $("#btn1").click(function () {  
        $("#txt1").text(function (i, oldtext) {
            return "the previos text:" + oldtext + "new text" + "amir mohammad , index(" + i + ")";

        });


    });
    $("#btn2").on({
        mouseenter: function () {
            $("input").val(function (i, oldtxt) {
                return "index" + i + "old:" + oldtxt + "new: 09386830583";
            });
        },
        mouseleave: function (){
            $("input").val(function (i, oldtxt) {
                return "😎";
            });
        }
    });
});