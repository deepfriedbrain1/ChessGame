const express = require('express');
const router = express.Router();
const db = require('../db');
const passport = require('passport');

router.get('/', (request, response) => {
  request.logout();
  request.app.locals.loggedin = false; //move to tools/helpers
  console.log("Thank You Come Again");
  response.redirect('/login');
});


module.exports = router;
