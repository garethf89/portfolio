var express = require("express"),
    os = require("os"),
    lastfmConstants,
    lastFmSettings,
    url,
    request = require('request'),
    mongojs = require('mongojs'),
    mongoURL = 'mongodb://test:pass@ds039281.mongolab.com:39281/gareth';

if(os.hostname().indexOf("ip") > -1){
    lastfmConstants = require("/var/www/configLastFM.json");
}else{
    lastfmConstants = require("./configLastFM.json");
}

//database connect
var mongodb = mongojs(mongoURL, ['lastfm']);

  mongodb.lastfm.find(function(err, docs) {
    console.log(docs);
});

exports.getAlbums = function(options, callback){
        
    url = 'http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=' + options.name + '&api_key=' + lastfmConstants.auth.key + '&format=json&period=3month&limit=3';
    request({url: url}, function (error, response, body) {
        callback(body);
    });    
}