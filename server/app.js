//AUTHOR NAME : AISHWARYA NARAYANAN STUDENT ID : B00820313
//Contributer Name: Abhinandan Walia STUDENT ID:B00820613


var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var createDocSchedule = require('./routes/doctor/createSchedule');
var createPatientUser = require('./routes/user/registerUser'); //Abhinandan Walia STUDENT ID:B00820613
var createDoctorUser = require('./routes/doctor/registerUser'); //Abhinandan Walia STUDENT ID:B00820613


var cancelappointment = require('./routes/patients/canceldocAppointment');
var manageapps = require('./routes/patients/manageappointment');
var getDocAppointment = require('./routes/doctor/getAppointments.js');
var app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//forwarding the requests to appropriate routes
app.use('/', indexRouter);
app.use('/users', usersRouter);


app.post('/createNewAppointment', createDocSchedule);
app.post('/createPatientUser',createPatientUser); //Abhinandan Walia STUDENT ID:B00820613
app.post('/createDoctorUser',createDoctorUser); //Abhinandan Walia STUDENT ID:B00820613
app.post('/canceldocAppointment', cancelappointment);
app.get('/manageappointment', manageapps);
app.post('/getDocAppointment',getDocAppointment);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
