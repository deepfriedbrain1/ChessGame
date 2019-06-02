const LocalStrategy = require('passport-local').Strategy;
//const User = require('../models/users');
const passport = require('passport');
const db = require('../db');


passport.use('local-login',
  new LocalStrategy({
    passReqToCallback: true
  },
  function(request, username, password, done) {
    db.any('SELECT * FROM users WHERE username = $1', [username])
      .then(user => {
        //console.log('USER: ', user, `Pass: [${password}]`);

        if (user.length === 0) {
          //console.log('User not found');
          return done(null, false, request.flash('message', 'Username not found'));
        }
        if (user[0].password !== password) {
          //console.log('Bad password');
          return done(null, false, request.flash('message', 'Incorrect Password'));
        }
        request.app.locals.loggedin = true; //move to tools/helpers
        return done(null, user[0]);
      })
      .catch(error => {
        return done(error);
      })
  })
);

passport.use('local-signup',
  new LocalStrategy({
    passReqToCallback: true
  },

  function(request, username, password, done) {
    db.any('SELECT * FROM users WHERE username = $1', [username])
      .then(user => {
        //console.log('USER: ', user, `Pass: [${password}]`);
        
        if (user.length !== 0) {          
          if(user[0].password === password){
            //console.log('login already registered user');
            return done(null, false, request.flash('message', 'Username taken'));
          }
          return done(null, false, request.flash('message', 'Username taken'));
          
        }
        else {
          db.none('INSERT INTO users(username, password, wins, losses) VALUES($1, $2, $3, $4)',[username, password, 0, 0])
            .then(() => {
              return done(null, username);
            })
            .catch(error => {
              return done(error);
            })
        }
        //request.app.locals.loggedin = true; //move to tools/helpers
        //return done(null, user[0]);
      })
      .catch(error => {
        return done(error);
      })
  })
);


passport.serializeUser(function(user,done) {
  //console.log("Serialize User id:", user.id);
  done(null,user.id);
});

passport.deserializeUser(function(id,done) {
  db.any('SELECT * FROM users WHERE id = $1', [id])
    .then(userId => {
      //console.log("Param id: ", id);
      if(userId[0].id !== id || userId.length === 0){
        //console.log("DS User id:", userId[0].id);
        return done(null,false);
      }
      //console.log("DeSerialize Success userId: ", userId[0].id);
      return done(null, userId);
    })
    .catch(error => {
      return done(error);
    })
});

module.exports = passport;
