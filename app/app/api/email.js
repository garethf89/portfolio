var nodemailer = require("nodemailer"),
    express = require("express"),
    os = require("os"),
    settingsEmail,
    env = process.env.NODE_ENV || 'dev',
    settingsEmail;

if(env == "dev"){
  settingsEmail = require("../config.json");
}else{
  settingsEmail = require("/var/www/config.json")
}

// create reusable transport method (opens pool of SMTP connections)
var smtpTransport = nodemailer.createTransport(settingsEmail);

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

    emailOptions.from = options.personName + "<" + options.personEmail + ">";
    emailOptions.text = options.personQuery;
    emailOptions.html = options.personQuery + "<br/><br/>" + "from: " + options.personName + ',' + options.personEmail;


    // send mail with defined transport object
    smtpTransport.sendMail(emailOptions, function(error, response){

        callback(error);

        // if you don't want to use this transport object anymore, uncomment following line
        smtpTransport.close(); // shut down the connection pool, no more messages
    });
}
