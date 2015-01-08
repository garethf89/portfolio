var nodemailer = require("nodemailer"),
    express = require("express");

// create reusable transport method (opens pool of SMTP connections)
var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "gazmatron1@gmail.com",
        pass: "plopodopolis1"
    }
});

// setup e-mail data with unicode symbols
var mailOptions = {
    from: "Gareth Ferguson <gazmatron1@gmail.com>",
    to: "Gareth Ferguson <gazmatron1@gmail.com>",
    subject: "Enquiry from Website",
    text: "Hello world",
    html: "<b>Hello world</b>"
}

// send mail with defined transport object
smtpTransport.sendMail(mailOptions, function(error, response){
    
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response.message);
    }

    // if you don't want to use this transport object anymore, uncomment following line
    smtpTransport.close(); // shut down the connection pool, no more messages
});