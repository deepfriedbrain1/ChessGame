const express = require('express');
const router = express.Router();
const db = require('../db');
const passport = require('passport');

router.get('/', (request, response) => {
  response.render('login', {message: request.flash('message')});
});

router.post(
  '/',
  passport.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true,
    session: true
  })
);

module.exports = router;