const socket = require('./socket.js');
const api = require('./api/index.js') ;

const initGameSocket = (gameId) => {
    console.log(`Init game socket move_${gameId}`)
    socket.on(`move_${gameId}`, function(){
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

        })
};

module.exports =  initGameSocket;

