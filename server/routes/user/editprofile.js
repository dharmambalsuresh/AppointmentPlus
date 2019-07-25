//Author NAME: Abhinandan Walia STUDENT ID: B00820613

var con = require('../../database/DBConfig').con;
var express = require('express');
var router = express.Router();

router.get('/editprofile', function(req, res, next) 
{
 con.getConnection (function(err) 
    {
     console.log("connected");
         if(err)
          {
                res.send(500,"SQL Error");
          }
        else
         {
           con.query("Select firstName, lastName, email, password, address, phone, city, dateofBirth, postalCode, province from appointmentplus.user where email = 'abhinandan.walia@dal.ca'" , function (err,result,fields) 
            {
             if(err)
              {
                res.send(500,"Query error"+err);
              }
             else
              {
                 console.log("connected");
                 console.log(result);
                 return res.send(result);
              }
            });
        }
    });

});
module.exports = router;

