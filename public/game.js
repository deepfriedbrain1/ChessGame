
const alphaToX = {};
alphaToX["A"] = 0;
alphaToX["B"] = 1;
alphaToX["C"] = 2;
alphaToX["D"] = 3;
alphaToX["E"] = 4;
alphaToX["F"] = 5;
alphaToX["G"] = 6;
alphaToX["H"] = 7;

const stringToInteger = {};
stringToInteger["1"] = 0;
stringToInteger["2"] = 1;
stringToInteger["3"] = 2;
stringToInteger["4"] = 3;
stringToInteger["5"] = 4;
stringToInteger["6"] = 5;
stringToInteger["7"] = 6;
stringToInteger["8"] = 7;

// Contains the frontend logic for the chessboard
let temp = "";
let previous = "";
let fromcol = "";
let fromrow = "";
let tocol = "";
let torow = "";

document.addEventListener('click', function(e) {
    let position = e.target.getAttribute('id');
        if (position != temp) {
            previous = temp;
            temp = position;
        }
    fromcol = previous.charAt(0);
    fromrow = previous.charAt(1);
    tocol = position.charAt(0);
    torow = position.charAt(1);

    const gameId = document.getElementById('game-id').value;

    let fcol = alphaToX[fromcol];
    let frow = stringToInteger[fromrow];
    let tcol = alphaToX[tocol];
    let trow = stringToInteger[torow];
    let data = {
        fromcol: fcol,
        fromrow: frow,
        tocol: tcol,
        torow: trow};


        fetch("/game/makemove", {
            method: "post",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              gameid: gameId,
              fromcol: fcol,
              fromrow: frow,
              tocol: tcol,
              torow: trow
            })
          })
          .then( (response) => { 
              console.log(response)
          });
    previous = "";
    position = "";
    }, false);