//setup sentences array
let sentences = [
    'Just a small-town girl',
    'Livin\' in a lonely world',
    'She took the midnight train goin\' anywhere'
];

let sentIndex = 0;
let letterIndex = 0;
let currentSentence = sentences[sentIndex];
let currentLetter = currentSentence[letterIndex];

$('#sentence').text(currentSentence);
$('#target-letter').text(currentLetter);


// //diff values if using keyup/keydown
// $(document).keypress(function (e){
//     //press a
//     console.log(event.which)     //97
//     console.log(event.keyCode)   //97
//     console.log(event.charCode)  //97
//     console.log(event.key)       //a
// })

//*********FUNCTIONS********* */

//When page loads, hide upper keyboard
$(document).ready(function () {
    $('#keyboard-upper-container').hide();
});

//When shift selected, show upper keyboard only
$(document).keyup(function (e) {
    if (e.which === 16) {
        $('#keyboard-upper-container').hide();
        $('#keyboard-lower-container').show();
    };

    $('.highlight').removeClass('highlight');

});

// Tracking keydown event to set correct board and highlight keys.
$(document).keydown(function (e) {
    //checking if shift key was pressed
    if (e.which === 16) {
        $('#keyboard-upper-container').show();
        $('#keyboard-lower-container').hide();
    };
});

//Tracking keypress event to highlight key
$(document).keypress(function (e) {
    $('#' + e.keyCode).addClass('highlight');


    //signal red or green if typed correct letter
    if(currentSentence.charCodeAt(letterIndex) === e.keyCode) {
        $('#feedback').append('<span class="glyphicon glyphicon-ok"></span>');
    } else {
        $('#feedback').append('<span class="glyphicon glyphicon-remove"></span>');
    }

    $('#yellow-block').css('left', '+=17.5px');

    letterIndex++;
    currentLetter = currentSentence[letterIndex];
    $('#target-letter').text(currentLetter);

});

