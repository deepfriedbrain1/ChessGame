import api from '/scripts/api/users/index.js';

/*
const appendOpenGames = () => {
	api.listGames()
		.then(response => {
			console.log(response[0].game_id);
			//document.getElementById('current-games').innerHTML = `button.btn.btn-success.btn-sm.btn-block#${response[0].game_id} Game ${response[0].game_id}`
			//determines how many open games are shown, scroll bar should be used instead
			response = response.slice(0, 5);
			response.forEach(function(id){
				var game = document.createElement('a');
				game.innerHTML = "Game " + id.game_id
				game.id = id.game_id
				game.setAttribute('class', "btn btn-success btn-sm btn-block" )
				game.href = `/api/joinGame/${id.game_id}`
				document.getElementById('current-games').appendChild(game)
				//console.log(id.game_id);
			})


		})
}
*/



const appendScores = () => {
	api.getScores()
		.then(response => {
			console.log("APPPENDING");
			//console.log("APpending: " + response);
			response.forEach(function(id){
				var scoreRow = document.createElement('tr');
				
				var user = document.createElement('td');
				var score = document.createElement('td');
				user.innerHTML = id.username;
				score.innerHTML = `${id.wins} / ${id.losses}`; 
				//score.id = id.game_id
				//score.setAttribute('class', "btn btn-success btn-sm btn-block" )
				//score.href = `/api/joinGame/${id.game_id}`
				document.getElementById('scoreboard').appendChild(user);
				document.getElementById('scoreboard').appendChild(score);
				//console.log(id.game_id);
			})
		})
}

appendScores();