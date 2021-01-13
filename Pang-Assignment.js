$(document).ready(function() {
    // accordion is called on the object with the id tabs
    $("#tabs").accordion({
        heightStyle: "content",
        collapsible: true
    });
});
$(document).ready(function() {
    // bxSlider is called on the object with the id gallery
    $('#gallery').bxSlider({
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 1500,
        slideMargin: 20,
        moveSlides: 1,
        pause: 5000
    });
});

$(document).ready(function() {
    var file;
    var fileName;
    // preload images
    var img = ["images/nhan.jpg", "images/lien.jpg", "images/michael.jpg", "images/mui.jpg"];
    for (var i; i<img.length-1; i++){
        new Image().src = img[i];
    }
    // clicking one of the memebers a attributes will get the titel and convert it into the neccessay json filename
    $("#members a").click(function(){
        file = $(this).attr("title");
        fileName = "json/" + file + ".json";
        // getJSON is called with the filename just created
        $.getJSON(fileName, function(data) {
            $("#team").html("");
            $.each(data, function() {
                $.each(this, function(key, value){
                    // the div with id team appends the info of the json file
                    $("#team").append(
                        "<h3>" + value.member + "</h3>" +
                        "<img src='" + value.image + "' alt='Nail Tech'>" +
                        "<p>" + value.text + "</p>"
                    );
                });
            });
        });
    });

});

$(document).ready(function() {
    $("#manicurePreview").click(function(){
        $("#servicePreview").load("textfiles/manicure.txt");
    });
    $("#pedicurePreview").click(function(){
        $("#servicePreview").load("textfiles/pedicure.txt");
    });
});