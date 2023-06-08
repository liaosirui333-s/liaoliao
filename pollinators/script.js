let bgchange = document.getElementById("bg"); //change bg color

let grassR = document.querySelectorAll(".grastyle"); //grass rotate
let grasses = document.querySelectorAll(".grastyle");
let blurr = document.getElementById("text");
let balls = document.querySelectorAll(".ball");

function refreshGrass() {
    $('.grass').empty(); // update when resize

    var width = $(window).width();
    var iterations = Math.floor(width / 4);

    for (var i = 0; i < iterations; i++) { //drawing grass~~
        $('.grass').append($('<div>', {
            class: 'grastyle',
            // id: 'grassrot',
            css: {
                height: Math.floor(Math.random() * 100 + 30)
            }
        }));
    }
    grassR = document.querySelectorAll(".grastyle");
}

$(window).on('resize', function() {
    refreshGrass();
});

$(document).ready(function() {
    refreshGrass();
});


//polinate

$(document).ready(function() {

    var mousePos = {};

    function getRandomInt(min, max) {
        return Math.round(Math.random() * (max - min + 1)) + min;
    }

    $(window).mousemove(function(e) {
        mousePos.x = e.pageX + 10;
        mousePos.y = e.pageY + 10;
    });

    $(window).mouseleave(function(e) {
        mousePos.x = -100;
        mousePos.y = -1;
    });

    var draw = setInterval(function() {
        if (mousePos.x >= 500 && mousePos.y <= 500) {

            var range = getRandomInt(5, 300);

            var color = "background: rgb(20,20,20);";

            var sizeInt = getRandomInt(1, 2);
            size = "height: " + sizeInt + "px; width: " + sizeInt + "px;";

            var left = "left: " + getRandomInt(mousePos.x - range - sizeInt, mousePos.x + range) + "px;";

            var top = "top: " + getRandomInt(mousePos.y - range - sizeInt, mousePos.y + range) + "px;";

            var style = left + top + color + size;
            $("<div class='ball' style='" + style + "'></div>").appendTo('#wrap').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() { $(this).remove(); });
        }

        if (mousePos.x <= 500 && mousePos.y >= 500) {

            var range = getRandomInt(1, 50);

            var color = "background: rgb(235,235,235);";

            var sizeInt = getRandomInt(1, 2);
            size = "height: " + sizeInt + "px; width: " + sizeInt + "px;";

            var left = "left: " + getRandomInt(mousePos.x - range - sizeInt, mousePos.x + range) + "px;";

            var top = "top: " + getRandomInt(mousePos.y - range - sizeInt, mousePos.y + range) + "px;";

            var style = left + top + color + size;

            $("<div class='ball' style='" + style + "'></div>").appendTo('#wrap').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() { $(this).remove(); });
        }
    }, 1);
});

document.addEventListener("mousemove", function(e) {
    if (e.clientX >= 500 && e.clientY <= 500) {
        bgchange.style.background = "rgb(250, 250, 250)"
        blurr.style.filter = "blur(0px)"

    } else if (e.clientX <= 500 && e.clientY >= 500) {
        bgchange.style.background = "rgb(0, 0, 0)"
        blurr.style.filter = "blur(8px)"

    }

    // for (let gra of grassR) {
    //     gra.style.transform = "rotate(" + e.clientX + (Math.random() * 100 - 50) + "deg)"

    // }
    // for (let gra of grassR) {
    //     let rect = gra.getBoundingClientRect();
    //     let centerX = rect.left + rect.width;
    //     let centerY = rect.top + rect.height;
    //     let angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
    //     gra.style.transform = "rotate(" + (angle + (Math.random() * 100)) + "deg)";

    // }
    for (let gra of grassR) {
        let leftp = gra.getBoundingClientRect().left;
        // let centerX = rect.left + rect.width;
        // let centerY = rect.top + rect.height;
        let angle = Math.atan((window.innerHeight - e.clientY) / (e.clientX - leftp));
        gra.style.transform = "rotate(" + (angle * (Math.random() * (50 - 10) - 10)) + "deg)";

    }



});



let flower1 = document.querySelector(".flower1");
let flowws = document.querySelectorAll(".floww");

document.addEventListener("mousedown", function(e) {
    // Get the x position of the mouse click
    let x = e.clientX;

    // Set the left position of all .floww elements to the x position
    for (let flow of flowws) {
        flow.style.left = Math.random() * 10 + "vw";
        flow.style.top = Math.random() * 10 + "vh";
        flow.style.opacity = 1;
    }
});

// document.addEventListener("mouseup", function() {
//     // Hide all .floww elements by setting their opacity to 0
//     for (let flow of flowws) {
//         flow.style.opacity = 0;
//     }
// });