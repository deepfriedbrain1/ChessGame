const db = require('./index');

exports.getUserScores = gameId => {
	return db.any("SELECT username, wins, losses FROM users")
		.then(data => {
			return data;
		})
		.catch(err => {
			console.log("DB Err: " + err);
		})

};