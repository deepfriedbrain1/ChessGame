const db = require('./index');

exports.createGame = userId => {
	return db.one("INSERT into games(next_user, white_user) VALUES ($1, $1) RETURNING id", [userId])
		.then(data => {
			//console.log("game id: " + data.id);
			return db.none("INSERT INTO game_pieces SELECT $1, $2, default_col, default_row, id FROM pieces WHERE default_row IN (0,1)", [data.id, userId])
				.then(() => {
					return db.one("INSERT into game_users VALUES($1, $2) RETURNING game_id", [data.id, userId])		
						.catch(err =>{
							console.log("DB Error: " + err);
						})
				})
				.catch(err =>{
					console.log("DB Error: " + err);
				})
			
		})
		.catch(err =>{
			console.log("Error: " + err);
		})
};

exports.joinGame = (userId, gameId) => {
 return	getGame(gameId)
		.then(data => {
			if (data.length < 2) {
				db.one("INSERT into game_users VALUES($1, $2) RETURNING game_id", [gameId, userId])
				db.none("INSERT INTO game_pieces SELECT $1, $2, default_col, default_row, id FROM pieces WHERE default_row IN (6,7)", [gameId, userId])
					.catch(err =>{
						console.log("DB Error: " + err);
					})
			}
			else{
				console.log("game full");
			}
		})
		.catch(err => {
			console.log("ERR: " + err);
		})
};

const getGame = gameId => {
	return db.any("SELECT * from game_users WHERE game_id = $1", [gameId]);
};


exports.listGames = () => {

	return db.any("SELECT game_id FROM game_users GROUP BY game_id HAVING COUNT(*) = 1")
		.then(data => {
			//console.log(data);
			return data;
		})
		.catch(err => {
			console.log("Err: " + err);
		})
};

exports.listCurrentGames = userId => {
	return db.any("SELECT game_id FROM game_users WHERE user_id = $1",[userId])
		.then(data => {
			//console.log(data);
			return data;
		})
		.catch(err => {
			console.log("Err: " + err);
		})
};

exports.getGameInfo = gameId => {
	return db.any("SELECT gp.*, p.name, p.img_src FROM game_pieces gp INNER JOIN pieces p ON gp.piece_id = p.id WHERE game_id = $1", [gameId])
		.then(data => {
			return data;
		})
		.catch(err => {
			console.log("DB Err: " + err);
		})

};

exports.leaveGame = (gameId, userId) => {
	db.none("DELETE FROM game_users WHERE game_id = $1 AND user_id = $2", [gameId, userId])

}



