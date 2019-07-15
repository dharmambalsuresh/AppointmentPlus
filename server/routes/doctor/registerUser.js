//Author NAME: Abhinandan Walia STUDENT ID: B00820613

var con = require('../../database/DBConfig').con;
var express = require('express');
var router = express.Router();
//var nodemailer = require('nodemailer');
//const { google } = require("googleapis");
//const OAuth2 = google.auth.OAuth2;

router.post('/createDoctorUser', function(req, res, next) {
     licenseNumber = req.body.licenseNumber;
     firstName = req.body.firstName;
     lastName =  req.body.lastName;
     email = req.body.email;
     password = req.body.password;
     dateofBirth = req.body.dateofBirth;
     address = req.body.address;
     phone = req.body.phone;
     city = req.body.city;
     province = req.body.province;
     postalCode = req.body.postalCode;
    con.getConnection(function(err) 
    {
      //console.log("connected");
   if(err)
   {
     res.send(500,"SQL Error");
   }
   else
   {
    con.query("insert into appointmentplus.doctor values('"+ firstName+"','"+ lastName+"','"+ licenseNumber+"','"+ email+"','"+ password+"','"+ dateofBirth+"','"+ address+"','"+ phone+"','"+ city+"','"+ province+"','"+ postalCode +"')", function (err, result, fields) {
     if(err)
     {
     res.send(500,"Querry Error "+err);
     }
     else{
    // console.log("connected");
     //console.log(result);

// send Email in successful registration
//      async function sendEmail() {
//         const oauth2Client = new OAuth2(
//          "736535151881-7tfovvs8na5fl3taah3he9l55g22pcj6.apps.googleusercontent.com", // ClientID
//          "ytUA8zh0XzYFjMHR08NEANq1", // Client Secret
//          "https://developers.google.com/oauthplayground" // Redirect URL
//     );
//     oauth2Client.setCredentials({
//      refresh_token: "1/bqPhjitXxfOV9UTj01ow8ixWgo3QW5jRInxLfH4OfDE"
//    });
//    const tokens = await oauth2Client.refreshAccessToken()
//    const accessToken = tokens.credentials.access_token //expires after 3600 sec
   
//    const smtpTransport = nodemailer.createTransport({
//      service: "gmail",
//      auth: {
//           type: "OAuth2",
//           user: "abhinandanwalia14@gmail.com", 
//           clientId: "736535151881-7tfovvs8na5fl3taah3he9l55g22pcj6.apps.googleusercontent.com",
//           clientSecret: "ytUA8zh0XzYFjMHR08NEANq1",
//           refreshToken: "1/bqPhjitXxfOV9UTj01ow8ixWgo3QW5jRInxLfH4OfDE",
//           accessToken: accessToken
//      }
//    });
//    const mailOptions = {
//      from: "abhinandanwalia14@gmail.com",
//      to: email,
//      subject: "Registration Successful",
//      generateTextFromHTML: true,
//      html: "<h3> Registration was successful..!! </h3>" 
//    };
//    smtpTransport.sendMail(mailOptions, (error, response) => {
//      error ? console.log(error) : console.log(response);
//      smtpTransport.close();
//    });} // That last brace is to close off our async function
//    sendEmail();

     return res.status(200).send({message:"success"});
     } 
   });
   }
 });
});

module.exports = router;

