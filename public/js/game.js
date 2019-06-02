console.log('test 12 3');

var temp;
var previous;

document.addEventListener('click', function(e) {
    var position = e.target.getAttribute('id');;
    if (position != temp){
        previous = temp;
        temp = position;
    }
    console.log("Previous Position: " + previous);
    console.log("Position : " + position);
    ;}, false);
