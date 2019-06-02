const express = require('express');
const router = express.Router();
const db = require('../db');
const passport = require('passport');

router.get('/', (request, response) => {
  response.render('register', {message: request.flash('message')});
});

router.post(
  '/',
  passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/register',
    failureFlash: true,
    session: false
  })
);

module.exports = router;
