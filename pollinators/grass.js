// for (var i = 0; i < 200; i++) {
//     $('.grass').append($('<div>', {
//         class: 'grastyle',
//         css: {
//             height: Math.floor(Math.random() * 100)
//         }
//     }));
// };

// var width = $(window).width();

// var iterations = Math.floor(width / 10);

// for (var i = 0; i < iterations; i++) {
//     $('.grass').append($('<div>', {
//         class: 'grastyle',
//         css: {
//             height: Math.floor(Math.random() * 100)
//         }
//     }));
// };

function refreshGrass() {
    $('.grass').empty(); // update when resize

    var width = $(window).width();
    var iterations = Math.floor(width / 4);

    for (var i = 0; i < iterations; i++) { //drawing grass~~
        $('.grass').append($('<div>', {
            class: 'grastyle',
            // id: 'grassrot',
            css: {
                height: Math.floor(Math.random() * 100)
            }
        }));
    }
}

$(window).on('resize', function() {
    refreshGrass();
});

$(document).ready(function() {
    refreshGrass();
});