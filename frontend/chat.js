
const socket = require('./socket.js');
const chat  = require('./api/chat/index.js');

//var session = require('../config/session');


const initChat = (gameId, messageInput, messageDisplay, messageForm) => {
    socket.on(`chat_${gameId}`, function(message){
            message = Object.values(message.username) + ": " + Object.values(message.message);
            element = document.createElement('li');
            element.appendChild(document.createTextNode(message));
            messageDisplay.appendChild(element);

        })

    messageInput.addEventListener('keydown', function(event){
        if (event.key === "Enter") {        
            const message = event.target.value;
            chat.sendMessage(gameId, message);
            messageForm.reset();
        }
    })

    socket.on('error', function (err) {
        console.log(err);
    })

};

module.exports = { initChat };

