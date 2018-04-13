
var express = require("express"),
    os = require("os"),
    fs = require("fs"),
    lastfmConstants,
    url,
    request = require('request'),
    mongo = require('mongodb').MongoClient,
    schedule = require('node-schedule'),
    env = process.env.NODE_ENV || 'dev',
    lastfmConstants,
    mongoUrl =  "gareth";

if (env == "dev") {
    lastfmConstants = require("../configLastFM.json");
} else {
    lastfmConstants = require("/var/www/configLastFM.json")
}

//database connect
var dbConnected = false;

// Database Name
const murl = 'mongodb://mongo';
const dbName = 'gareth';
var db = null;

// Use connect method to connect to the server
    mongo.connect(murl, function(err, client) {
    if(err){
       return
    }
  console.log("Connected successfully to server");
  db = client.db(dbName);
  client.close();
  dbConnected = true;
});


exports.getAlbums = function (options, callback) {

    if(!dbConnected){
        callback(null);
        return
    }

    db.collection('lastfm').find({
        _id: options.name
    }, function (err, result) {
        //Use result
        if (err || !result[0]) {
            url = 'http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=' + options.name + '&api_key=' + lastfmConstants.auth.key + '&format=json&period=1month&limit=3';
            request({
                url: url
            }, function (error, response, body) {
                //updateCollection();
                callback(body);
            },function(err){
                console.log('lastfm error')
            });
        } else {
            callback(result[0].data);
        }

    });
}


//update every week!
var scheduleWe = schedule.scheduleJob({hour: 0,minute: 0,dayOfWeek: 6}, function () {
    updateCollection();
});

function updateCollection(){
    url = 'http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=DirtyG&api_key=' + lastfmConstants.auth.key + '&format=json&period=1month&limit=3';

    request({
        url: url
    }, function (error, response, body) {

        //store in mongoDB
        db.collection('lastfm').update(
        { _id: "DirtyG" },
        {
            _id: "DirtyG",
            data: body
        },
        { upsert: true } );

        var today = new Date();

        fs.appendFile('my_log.txt', 'Done on ' + today.getDate() + ' ' + (today.getMonth() + 1) + ' ' + today.getFullYear() + '   ' , (error) => { console.log('Error in db') });

    });
}
