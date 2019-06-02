import api from '/scripts/api/users/index.js';

const appendScores = () => {
	api.getScores()
		.then(response => {
			response.forEach(function(id){
				const scoreRow = document.createElement('tr');
				scoreRow.id = id.username;
				const user = document.createElement('td');
				const score = document.createElement('td');
				user.innerHTML = id.username;
				score.innerHTML = `${id.wins} / ${id.losses}`; 
				document.getElementById('scoreboard').appendChild(scoreRow);
				document.getElementById(scoreRow.id).appendChild(user);
				document.getElementById(scoreRow.id).appendChild(score);
				
			})
		})
}

appendScores();