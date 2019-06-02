var express = require('express');
var router = express.Router();
const Users = require("../../db/users");


router.get('/scoreboard', function(req, res, next) {
	Users.getUserScores()
		.then((scores) => {
			res.send(scores);
		})
		.catch(error => {
			console.log("Scoreboard Route Error: " + error);
		})
    
});

module.exports = router;