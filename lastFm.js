var express = require("express"),
    os = require("os"),
    fs = require("fs"),
    lastfmConstants,
    lastFmSettings,
    url,
    request = require('request'),
    mongojs = require('mongojs'),
    schedule = require('node-schedule'),
    mongoURL;

if (os.hostname().indexOf("ip") > -1) {
    lastfmConstants = require("/var/www/configLastFM.json");
    mongoUrl = lastfmConstants.mongoURL;
} else {
    lastfmConstants = require("./configLastFM.json");
    mongoUrl = "gareth";
}
//database connect
var mongodb = mongojs(mongoUrl, ['lastfm']);
exports.getAlbums = function (options, callback) {
    mongodb.lastfm.find({
        _id: options.name
    }, function (err, result) {
        //Use result
        if (err || !result[0]) {
            url = 'http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=' + options.name + '&api_key=' + lastfmConstants.auth.key + '&format=json&period=1month&limit=3';
            request({
                url: url
            }, function (error, response, body) {
                //store in mongoDB
                
                 mongodb.lastfm.update(
                   { _id: options.name }, 
                   { 
                     _id: options.name,
                    data: body
                   },
                   {
                        upsert: true
                   },
                function(err, doc, lastErrorObject) {
                    console.log(err)
                    console.log(doc);
                });
                callback(body);
            });
        } else {
            callback(result[0].data);
        }

    });
}


//update every week!
var scheduleWe = schedule.scheduleJob({hour: 0,minute: 0,dayOfWeek: 6}, function () {

    url = 'http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=DirtyG&api_key=' + lastfmConstants.auth.key + '&format=json&period=1month&limit=3';

    request({
        url: url
    }, function (error, response, body) {

        //store in mongoDB
        mongodb.collection('lastfm').update(
        { _id: "DirtyG" },
        {
            _id: "DirtyG",
            data: body
        },    
        { upsert: true } );
        
        var today = new Date();

        fs.appendFile('my_log.txt', 'Done on ' + today.getDate() + ' ' + (today.getMonth() + 1) + ' ' + today.getFullYear() + '   ' );
        
    });
});