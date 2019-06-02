var express = require('express');
var router = express.Router();
const board = require('../chess-game/board')
const {io} = require('../messaging');

router.get('/:id', (request, response) => {
  if (request.isAuthenticated()) {
    const id = request.params.id;

    response.render('game', { id });
  }

});

router.get('/getpieces/:id', function (req, res, next) {
  db.any('select * from  game_pieces left join pieces on game_pieces."piece_id" = pieces."id" where game_pieces."gameId" = $1', req.params.id
  ).then(function (data) {
    res.status(200)
      .json({
        status: 'success',
        data: data,
        message: 'Retrieved list of all games'
      });
  }).catch(function (err) {
    console.log(err)
  })
});

router.post('/makemove', async function (req, res, next) {
  console.log("Making move")
  let message = "";
  const userid = req.session.passport.user
  console.log(req.body.fromcol , req.body.fromrow , req.body.tocol , req.body.torow , req.body.gameid)
  if (req.body.fromcol != null && req.body.fromrow != null && req.body.tocol != null && req.body.torow != null && req.body.gameid != null) {
    const gameid = req.body.gameid
    const fromcol = req.body.fromcol
    const fromrow = req.body.fromrow
    const tocol = req.body.tocol
    const torow = req.body.torow

    let success = await board.movePiece(gameid, fromcol, fromrow, tocol, torow, userid)
      .then(function (success) {
        res.status(200)
          .json({
            status: 'success',
            successfull: success,
            message: message
          });
      }).catch(function (err) {
        console.log(err)
      })
  }else{
    console.log("Failed, didnt revice parameters")
    message = "Did not recive the nessesary parameters"
    res.status(500)
          .json({
            status: 'Failure',
            legalmoves: req.params,
            message: message
          });
  }

});


router.post('/moves', function (req, res, next) {
  let message = "";
   
  if (req.body.col && req.body.row && req.body.gameid) {
    let legalMoves = board.getAllPossibleForPiece(1, 1, 2)
      .then(function (legalMoves) {
        let message = (legalMoves) ? "Retreaved all legal move for selected piece" : "Could not retreve legal moves";
        res.status(200)
          .json({
            status: 'success',
            legalmoves: legalMoves,
            message: message
          });
      }).catch(function (err) {
        console.log(err)
      })
  }else{
    message = "Did not recive the nessesary parameters"
    console.log(message)
    res.status(500)
          .json({
            status: 'Failure',
            legalmoves: req.params,
            message: message
          });
  }

});


/* GET users listing. */
router.get('/:gameid', function (req, res, next) {
  let boardState = chessgame.getBoardState(req.param.gameid)
  res.json(boardState)
});


module.exports = router;