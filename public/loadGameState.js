const {socket} =  require('../frontend/socket.js');
const api = require('../frontend/api/index.js');
//const game = require("../frontend/gameSocket.js");


const idArray = {};

idArray["00"] = "A1";
idArray["10"] = "B1";
idArray["20"] = "C1";
idArray["30"] = "D1";
idArray["40"] = "E1";
idArray["50"] = "F1";
idArray["60"] = "G1";
idArray["70"] = "H1";

idArray["01"] = "A2";
idArray["11"] = "B2";
idArray["21"] = "C2";
idArray["31"] = "D2";
idArray["41"] = "E2";
idArray["51"] = "F2";
idArray["61"] = "G2";
idArray["71"] = "H2";

idArray["02"] = "A3";
idArray["12"] = "B3";
idArray["22"] = "C3";
idArray["32"] = "D3";
idArray["42"] = "E3";
idArray["52"] = "F3";
idArray["62"] = "G3";
idArray["72"] = "H3";

idArray["03"] = "A4";
idArray["13"] = "B4";
idArray["23"] = "C4";
idArray["33"] = "D4";
idArray["43"] = "E4";
idArray["53"] = "F4";
idArray["63"] = "G4";
idArray["73"] = "H4";

idArray["04"] = "A5";
idArray["14"] = "B5";
idArray["24"] = "C5";
idArray["34"] = "D5";
idArray["44"] = "E5";
idArray["54"] = "F5";
idArray["64"] = "G5";
idArray["74"] = "H5";

idArray["05"] = "A6";
idArray["15"] = "B6";
idArray["25"] = "C6";
idArray["35"] = "D6";
idArray["45"] = "E6";
idArray["55"] = "F6";
idArray["65"] = "G6";
idArray["75"] = "H6";

idArray["06"] = "A7";
idArray["16"] = "B7";
idArray["26"] = "C7";
idArray["36"] = "D7";
idArray["46"] = "E7";
idArray["56"] = "F7";
idArray["66"] = "G7";
idArray["76"] = "H7";

idArray["07"] = "A8";
idArray["17"] = "B8";
idArray["27"] = "C8";
idArray["37"] = "D8";
idArray["47"] = "E8";
idArray["57"] = "F8";
idArray["67"] = "G8";
idArray["77"] = "H8";

const gameId = document.getElementById('game-id').value;

/*
game.initGameSocket(gameId);
*/
//const gameId = document.getElementById('game-id').value;

const clearBoard = () => {
    for(const key in idArray){
        const id = idArray[key];
        const element = document.querySelector("#" + id);
        if(element != null)
            element.setAttribute("style", "background-image: url('')");
    }
}


const render = ()  => {
        
        api.getGameInfo(gameId)
            .then(data => {
            for (let i = 0; i < Object.keys(data).length; i++) {
                const key = data[i].col + "" + data[i].row;
                const id = idArray[key];

                const element = document.querySelector("#" + id);

                if(element != null)
                    element.setAttribute("style", "background-image: url("+ data[i].img_src + ")");
            }
        }).catch(err => {
            // handle error
            console.log('Error loading gamestate: ' + err);
        });
}

const start = () => {
    console.log("START RENDER");
    socket.on(`move_${gameId}`, function(){
        clearBoard();
        render();

    });
    render();



};


document.addEventListener('DOMContentLoaded', render);
start();
