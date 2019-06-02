const chat = require("../../frontend/chat.js");
//import chat from '/scripts/chat.js';

const gameId = document.getElementById('game-id').value;
const messageInput = document.getElementById('m');
const messageDisplay = document.getElementById('chatMessages');
const messageForm = document.getElementById('chatinput');

/*
(function(){
	document.getElementById('chatsubmit').onclick = function() { 
	document.getElementById('m').value = 'dsaf';
	}
});
*/

chat.initChat(gameId, messageInput, messageDisplay, messageForm);

