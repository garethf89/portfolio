
var express = require("express"),
    os = require("os"),
    fs = require("fs"),
    lastfmConstants,
    lastFmSettings,
    url,
    request = require('request'),
    mongojs = require('mongojs'),
    schedule = require('node-schedule'),
    mongoURL,
    env = process.env.NODE_ENV || 'dev',
    lastfmConstants,
    mongoUrl =  "gareth";

if (env == "dev") {
    lastfmConstants = require("../configLastFM.json");
} else {
    lastfmConstants = require("/var/www/configLastFM.json")
}

//database connect
var mongodb = mongojs(mongoUrl, ['lastfm']),
    dbConnected = false;

mongodb.on('error', function() {
    console.log('mongo db connect failed');
});
mongodb.on('connect', function() {
    console.log('mongo db connect succes');
    dbConnected = true;
});


exports.getAlbums = function (options, callback) {


  if(!dbConnected){
    callback(null);
    return
  }

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
