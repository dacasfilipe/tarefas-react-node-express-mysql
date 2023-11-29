var createError = require('http-errors');
var express = require('express');
var path = require('path');
const cookieParser = require('cookie-parser');
// var logger = require('morgan');
var usuarioRouter = require('./routes/usuario');
var tarefaRouter = require('./routes/tarefas');
var app = express();
const PORT =  3001;
// importand o sequelize
const { Sequelize } = require('sequelize');
const sequelize = require('./sequelize');
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());


// Models importações
const Tarefa = require('./models/tarefa');
const Usuario = require('./models/usuario');
sequelize.sync();


// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/usuarios', usuarioRouter);
app.use('/tarefa', tarefaRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   //res.status(err.status || 500);
//   res.render('error');
// });

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

module.exports = app;
