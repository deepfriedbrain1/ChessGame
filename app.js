
if(process.env.NODE_ENV === 'development'){
  require('dotenv').config();
}

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');


var flash = require('connect-flash');
const passport = require('./config/passport');
var session = require('./config/session');

//require('./config/passport')(passport);

var indexRouter = require('./routes/index');
var gameRouter = require('./routes/game');
var loginRouter = require('./routes/login');


var chessboardRouter = require('./routes/chessboard');
var registrationRouter = require('./routes/registration');
var menuRouter = require('./routes/menu');
var rulesRouter = require('./routes/rules');
var chatRouter = require('./routes/chat');
var scoreboardRouter = require('./routes/scoreboard');
var gameRouter = require('./routes/game');

var logoutRouter = require('./routes/logout');
var registerRouter = require('./routes/register');

var gamesAPIRouter = require('./routes/api/game');
var chatAPIRouter = require('./routes/api/chat');
var userAPIRouter = require('./routes/api/users');



console.log(indexRouter);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/css/'));
app.use('/scripts', express.static(__dirname + '/frontend'));

app.use(flash());
//express-session
app.use(session);
//passport
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/game', gameRouter);
app.use('/login', loginRouter);

app.use('/chessboard', chessboardRouter);
app.use('/registration', registrationRouter);
app.use('/menu', menuRouter);
app.use('/rules', rulesRouter);
app.use('/chat', chatRouter);
app.use('/scoreboard', scoreboardRouter);
app.use('/game', gameRouter);

app.use('/logout', logoutRouter);
app.use('/register', registerRouter);

app.use('/api', gamesAPIRouter);
app.use('/api/chat', chatAPIRouter);
app.use('/api/users', userAPIRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('.env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

