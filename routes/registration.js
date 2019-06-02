var express = require('express');
var router = express.Router();
const passport = require('passport');

router.get('/', (request, response) => {
  response.render('registration', {message: request.flash('message')});
});

router.post(
  '/',
  passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/registration',
    failureFlash: true,
    session: false
  })
);

module.exports = router;