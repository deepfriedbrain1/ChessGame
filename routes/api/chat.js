var express = require('express');
var router = express.Router();
const Game = require("../../db/games");

//user User db interface!!
const User = require("../../db/");

const {io} = require('../../messaging');

router.post('/:gameId', function(req, res, next) {
	if(req.isAuthenticated()){

  		const user = req.session.passport.user;

      User.one("SELECT username from users WHERE id = $1", [user])
        .then((username) => {
          username = {username : Object.values(username)};
          const gameId = req.params.gameId;
          const message = req.body;      
          try{
            io.emit(`chat_${gameId}`, {username, message});
          }
          catch(error){
            console.log("emit issue: " + error);
          }

          res.sendStatus(204);

        })
        .catch(error => {
          console.log("Route Err: " + error);
        })
      
	}
	else{
		res.redirect('/login');
	}
});

module.exports = router;