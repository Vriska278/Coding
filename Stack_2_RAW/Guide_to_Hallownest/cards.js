$(document).ready(function ($) {
    var feedbackSlider = $(".feedback-slider");
    feedbackSlider.owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        autoplay: true,
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        navText: [
            "<i class='fa fa-long-arrow-left'></i>",
            "<i class='fa fa-long-arrow-right'></i>"
        ],
        responsive: {
            // breakpoint from 767 up
            767: {
                nav: true,
                dots: false
            }
        }
    });

    feedbackSlider.on("translate.owl.carousel", function () {
        $(".feedback-slider-item h3")
            .removeClass("animated fadeIn")
            .css("opacity", "0");
        $(".feedback-slider-item img, .feedback-slider-thumb img, .customer-rating")
            .removeClass("animated zoomIn")
            .css("opacity", "0");
    });

    feedbackSlider.on("translated.owl.carousel", function () {
        $(".feedback-slider-item h3").addClass("animated fadeIn").css("opacity", "1");
        $(".feedback-slider-item img, .feedback-slider-thumb img, .customer-rating")
            .addClass("animated zoomIn")
            .css("opacity", "1");
    });
    $(".thumb-next").on("click", function () {
        feedbackSlider.trigger("next.owl.carousel", [300]);
        return false;
    });
    $(".thumb-prev").on("click", function () {
        feedbackSlider.trigger("prev.owl.carousel", [300]);
        return false;
    });
});

var carousel = document.querySelector("owl-carousel");

var enemy_names = [];

readTextFile("names.txt");

function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                let allText = rawFile.responseText;
                enemy_names = manipulateNames(allText);
            }
            else {
                console.log("error");
            }
        }
    };
    rawFile.send(null);
}
console.log(enemy_names);

function manipulateNames(text) {
    var names = [];
    text = text.replace("_", " ");
    text.split("\n").forEach(function (word) {
        names.push(word);
    });
    return names;
}

readDescription("description.txt");

var descriptions = new Array();

function readDescription(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                let sentences = rawFile.responseText;
                descriptions = manipulateDescriptions(sentences);
            }
            else {
                console.log("error");
            }
        }
    };
    rawFile.send(null);
}

function manipulateDescriptions(text) {
    var temp = [];
    text.split("\n").forEach(function (line) {
        temp.push(line);
    });

    return temp;
}

console.log(descriptions);