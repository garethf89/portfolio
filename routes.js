var emailContact = require('./email'),
    lastFmService = require('./lastFm');
        
//send email
exports.formEmail =  function(req,callback) {
    emailContact.sendEmail(req,callback);
};

exports.getAlbums = function(req,callback) {
    lastFmService.getAlbums(req,callback);
};

exports.default = function(req, res) {
    res.header("Content-Type", "application/html; charset=utf-8");
    res.sendFile('index.html', { root: html_dir });
};
