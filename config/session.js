const expSession = require('express-session');

const session = expSession({
	resave: true,
  	saveUninitialized: true,
	store: new (require('connect-pg-simple')(expSession))(),
	secret: '3jis89928uunia',//process.env.SESSION_SECRET,
	cookie: {maxAge: 10 * 24 * 60 * 60 * 1000 } //10 days
});

module.exports = session;