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
};

$(window).on('resize', function() {
    refreshGrass();
});

$(document).ready(function() {
    refreshGrass();
});

function map(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}
//polinate

$(document).ready(function() {

    var mousePos = {};

    function getRandomInt(min, max) {
        return Math.round(Math.random() * (max - min + 1)) + min;
    }

    $(window).mousemove(function(e) {
        mousePos.x = e.pageX;
        mousePos.y = e.pageY;
    });

    $(window).mouseleave(function(e) {
        mousePos.x = -100;
        mousePos.y = -1;
    });

    var draw = setInterval(function() {
        if (mousePos.y >= window.innerHeight / 2) {

            var balln = map(mousePos.y, 0, window.innerHeight, 0, 100);

            var range = balln;
            // console.log(balln);
            var color = "background: rgb(10,10,10);";

            var sizeInt = getRandomInt(0, 1);
            size = "height: " + sizeInt + "px; width: " + sizeInt + "px;";

            var left = "left: " + getRandomInt(mousePos.x - range - sizeInt, mousePos.x + range) + "px;";

            var top = "top: " + getRandomInt(mousePos.y - range - sizeInt, mousePos.y + range) + "px;";


            var style = left + top + color + size;
            $("<div class='ball' style='" + style + "'></div>").appendTo('#wrap').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() { $(this).remove(); });
        } else if (mousePos.y <= window.innerHeight / 2) {

            var balln = map(mousePos.y, 0, window.innerHeight, 0, 300);

            var range = balln;

            var color = "background: rgb(255,255,255);";

            var sizeInt = getRandomInt(0, 1);
            size = "height: " + sizeInt + "px; width: " + sizeInt + "px;";

            var left = "left: " + getRandomInt(mousePos.x - range - sizeInt, mousePos.x + range) + "px;";

            var top = "top: " + getRandomInt(mousePos.y - range - sizeInt, mousePos.y + range) + "px;";

            var style = left + top + color + size;

            $("<div class='ball' style='" + style + "'></div>").appendTo('#wrap').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() { $(this).remove(); });
        }
    }, 1);
});

document.addEventListener("mousemove", function(e) {
    if (e.clientY >= window.innerHeight / 2) {
        bgchange.style.background = "rgb(250, 250, 250)"
        blurr.style.filter = "blur(0px)"

    } else if (e.clientY <= window.innerHeight / 2) {
        bgchange.style.background = "rgb(0, 0, 0)"
        blurr.style.filter = "blur(4px)"

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

        gra.style.transform = "rotate(" + (angle + (Math.random() * 60)) + "deg)";

    }

});



let flower1 = document.querySelector(".flower1");
let flowws = document.querySelectorAll(".floww");

let flowwss = document.querySelectorAll(".flow");


function updateElementPosition(elements) {
    for (let element of elements) {
        element.style.left = Math.random() * 100 + "vw";
        element.style.top = Math.random() * 14 + "vh";
        element.style.opacity = 1;

    }

}

function updateElementOpacity(elements, cursorX) {
    for (let element of elements) {
        const elementX = element.getBoundingClientRect().left;
        const distance = Math.abs(cursorX - elementX);
        const opacity = 1 - distance / 300;
        element.style.opacity = opacity;
    }
}

// Function to animate the elements upward and fade out
// function animateElements(elements) {
//     for (let element of elements) {
//         const initialTop = parseFloat(element.style.top);
//         const initialLeft = parseFloat(element.style.left);
//         const speed = Math.random() * 2 + 0.4;
//         let distance = 0;
//         const animation = setInterval(() => {
//             distance += speed;
//             element.style.top = initialTop - distance + speed + "vh";
//             element.style.left = initialLeft - distance + speed * 100 + "vw";
//             element.style.opacity = 1 - distance * speed + 0.2;
//             if (distance >= 100) {
//                 clearInterval(animation);
//                 element.style.opacity = 0;
//             }
//         }, 10);
//     }
// }



// document.addEventListener("mouseup", function(e) {
//     animateElements(flowws);
//     animateElements(flowwss);
// });

// document.addEventListener("mousedown", function(e) {


//     // Get the x position of the mouse click
//     let x = e.clientX;

//     // Set the left position of all .floww elements to the x position
//     for (let flow of flowws) {
//         flow.style.left = Math.random() * 100 + "vw";
//         flow.style.top = Math.random() * 14 + "vh";
//         flow.style.opacity = 1;
//     }
//     for (let floww of flowwss) {
//         floww.style.left = Math.random() * 100 + "vw";
//         floww.style.top = Math.random() * 14 + "vh";
//         floww.style.opacity = 1;
//     }

// });

// document.addEventListener("mouseup", function(e) {
//     // Get the x position of the mouse click
//     let x = e.clientX;

//     // Set the left position of all .floww elements to the x position
//     for (let flow of flowws) {
//         flow.style.left = Math.random() * 100 + "vw";
//         flow.style.top = Math.random() * 14 + "vh";
//         flow.style.opacity = 0;
//     }
// });
const bflyC = document.getElementById('gifc');
const bgif = document.getElementById('bfly');

// function updateSoundVolume(cursorX) {
//     const volume = cursorX / window.innerWidth; // Adjust the value to control the volume range
//     sound.volume = volume;
function updateAudioVolume(cursorX) {

    const windowWidth = window.innerWidth;
    const maxVolume = 1; // Maximum volume
    const minVolume = 0.2; // Minimum volume
    const center = windowWidth / 2;
    const distanceFromCenter = Math.abs(cursorX - center);
    const volumeRange = Math.log10(maxVolume / minVolume); // Logarithmic volume range
    const volumeOffset = Math.log10(distanceFromCenter + 1) / Math.log10(center + 1);
    const volume = maxVolume - volumeOffset * volumeRange;

    // Set the volume of the audio element
    const audio = document.getElementById("audioo");
    audio.volume = volume;
    console.log(volume);
}

document.addEventListener("mousemove", function(e) {
    updateElementPosition(flowws);
    updateElementPosition(flowwss);
    const cursorX = e.clientX;
    const cursorY = e.clientY;

    updateElementOpacity(flowws, cursorX);
    updateElementOpacity(flowwss, cursorX);
    updateAudioVolume(cursorX);
    bflyC.style.left = `${cursorX+20}px`;
    bflyC.style.top = `${cursorY+10}px`;



});


// document.addEventListener('mousemove', (event) => {
//     const mouseX = e.clientX;
//     const mouseY = e.clientY;

//     gifContainer.style.left = `${mouseX}px`;
//     gifContainer.style.top = `${mouseY}px`;
// });