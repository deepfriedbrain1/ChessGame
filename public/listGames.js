//move this file to frontend then import and call functions from public js file

const api = require('../frontend/api/index.js');


const appendOpenGames = () => {
	api.listGames()
		.then(response => {
			console.log(response[0].game_id);
			var parentNode = document.getElementById("current-games");
			parentNode.innerHTML = '';
			response.forEach(function(id){
				var game = document.createElement('a');
				game.innerHTML = "Game " + id.game_id
				game.id = id.game_id
				game.setAttribute('class', "btn btn-success btn-sm btn-block" )
				game.href = `/api/joinGame/${id.game_id}`
				document.getElementById('current-games').appendChild(game)
			})

		})
}


const appendCurrentGames = () => {
	api.listCurrentGames()
		.then(response => {
			var parentNode = document.getElementById("view-games");
			parentNode.innerHTML = '';
			
			response.forEach(function(id){
				var game = document.createElement('a');
				game.innerHTML = "Game " + id.game_id
				game.id = id.game_id
				game.setAttribute('class', "btn btn-warning btn-sm btn-block" )
				game.href = `/game/${id.game_id}`
				document.getElementById('view-games').appendChild(game)
				
			})
		})
}

const appendQuitGame = () => {
	var element = document.createElement('a');
	const gameId = document.getElementById('game-id').value
	element.innerHTML = "Quit Game"
	element.setAttribute('class', "btn btn-danger btn-sm btn-block" )
	element.href = `/api/leaveGame/${gameId}`
	document.getElementById('quitGame').appendChild(element)
}

const gameInfo = () => {
	const gameId = document.getElementById('game-id').value
	api.getGameInfo(gameId)
		.then(response => {
			//console.log("GAME " + response);
		})
}


const generateGameList = () => {
	appendOpenGames();
	appendCurrentGames();
	appendQuitGame();
}


generateGameList();