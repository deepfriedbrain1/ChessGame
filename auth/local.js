const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/users');
const passport = require('passport');

passport.use(new LocalStrategy((username, password, cb) => {
	User.find(username, (err,result) => {
		if(err) {
			console.log('Error in passport.js User.find', err)
			return cb(err)
		}

		if(result.rows.length > 0){
			const first = result.rows[0]
			//add bcrypt here
			if(password == first.password){
				return done(null,res)
			} else {
				cb(null, false)
			}
		}else{
			cb(null,false)
		}
	})
}))