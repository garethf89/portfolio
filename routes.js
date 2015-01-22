var emailContact = require('./email');
        
//send email
exports.formEmail =  function(req,callback) {
    emailContact.sendEmail(req,callback);
};

exports.default = function(req, res) {
    res.header("Content-Type", "application/html; charset=utf-8");
    res.sendFile('index.html', { root: html_dir });
};
