teste333

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/mobills';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


var index = require('./src/routes/index.route');
//var users = require('./src/routes/');

//var CategoriaController = require('./src/controller/categoriaController');

var app = express();

var router = express.Router();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//api doc
app.use('/doc', express.static(path.join(__dirname, 'public/apidoc')));

//app.use('/', index);

//antiga implementacao
//app.use('/api/v1', router);

//var cc = new CategoriaController(router);
//app.get('/users', users);

app.use('/api/v1', index);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   // var err = new Error('Não encontrado');
//   // err.status = 404;
//   // next(err);
//   res.render('index',  { title: 'Express' });
// });

// // // error handler
// // app.use(function(err, req, res, next) {
// //   // set locals, only providing error in development
// //   res.locals.message = err.message;
// //   res.locals.error = req.app.get('env') === 'development' ? err : {};

// //   // render the error page
// //   res.status(err.status || 500);
// //   res.render('error');
// // });


module.exports = app;
