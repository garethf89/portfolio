var nodemailer = require("nodemailer"),
    express = require("express"),
    os = require("os"),
    settingsEmail;

if(os.hostname().indexOf("ip") > -1){
    settingsEmail = require("/var/www/config.json");
}else{
    settingsEmail = require("./config.json");
}

// create reusable transport method (opens pool of SMTP connections)
var smtpTransport = nodemailer.createTransport("SMTP",settingsEmail);

// setup e-mail data with unicode symbols
var emailOptions,
    mailOptions = {
    from: "Gareth Ferguson <gazmatron1@gmail.com>",
    to: "Gareth Ferguson <gazmatron1@gmail.com>",
    subject: "Enquiry from Website",
    text: "Hello world",
    html: "<b>Hello world</b>"
}

exports.sendEmail = function(options, callback){
    
    //start with defaults
    emailOptions = mailOptions;
        
    emailOptions.from = options.person_name + "<" + options.person_email + ">";
    emailOptions.text = options.person_enq;
    emailOptions.html = options.person_enq + "<br/><br/>" + "from: " + options.person_name + ',' + options.person_email;
    
    
    // send mail with defined transport object
    smtpTransport.sendMail(emailOptions, function(error, response){

        callback();
        
        // if you don't want to use this transport object anymore, uncomment following line
        smtpTransport.close(); // shut down the connection pool, no more messages
    });
}