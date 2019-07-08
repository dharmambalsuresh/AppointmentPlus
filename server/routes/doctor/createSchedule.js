var con = require('../../database/DBConfig').con;
var express = require('express');
var router = express.Router();

/* creating appointment schedule*/
router.post('/createNewAppointment', function(req, res, next) {
    
    var appointmentId = req.body.appId;
    var date = req.body.date;
    var timeslots = req.body.timeslots;
    var docName = req.body.doctor;
    var location = req.body.loc;
    var comments = req.body.comments;
 con.getConnection(function(err) {
     console.log("connected");
  if(err){
    res.send(500,"SQL Error");
  }
  else{
 con.query("insert into appointmentplus.newappointmentdoctor values("+appointmentId+",'"+ date+"','"+timeslots +"','"+ docName+"','"+location+"','"+comments +"')", function (err, result, fields) {
    if(err){
    res.send(500,"Query error");
    }else{
    console.log("connected");
    console.log(result);
    return res.status(200).send({message:"success"});
    }
    
  });
  }
});

});

module.exports = router;

