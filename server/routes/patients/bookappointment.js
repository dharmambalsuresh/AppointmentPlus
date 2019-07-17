//AUTHOR
//NAME : Dharmambal Sureshkumar
//STUDENT ID : B00824492
var con = require('../../database/DBConfig').con;
var express = require('express');
var router = express.Router();

router.post('/bookappointment', function(req, res, next)
{
    console.log("entered")
    
        var book_appointmentID = req.body.appId;
        var FirstName = req.body.FirstName;
        var LastName = req.body.LastName;
        var Email = req.body.Email;
        var number = req.body.number;
        var Doctorname = req.body.Doctorname;
        var Bookdate=req.body.Bookdate;
        var Booktime=req.body.Booktime;
        var reason=req.body.reason;
        var status=req.body.status;
        var docId = req.body.docId;
        con.getConnection(function(err) {
            console.log("connected");
         if(err){
           console.log(err);
           res.send(500,"SQL Error");
         }
         else{
            con.query("insert into appointmentplus.book_appointment values("+ book_appointmentID+",'"+ FirstName+"','"+LastName +"','"+ Email+"','"+number+"','"+Doctorname +"','"+docId +"','"+Bookdate+"','"+Booktime+"','"+reason+"','"+status+"')", function (err, result, fields) {
               if(err){
                 console.log(err);
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
