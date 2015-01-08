var express = require('express'),
    app = express(),
    compression = require('compression');

app.use(compression());
app.disable('etag');

// Loading socket.io
var io = require('socket.io').listen(app.listen(8000));

var count = 0,
    users = [];

// User connects - count
io.sockets.on('connection', function (socket) {
    
    count++;
    io.sockets.emit('count',{
        'count': count
    });
    
    //console.log(socket.handshake.address);
            
    //reduce counter when user leaves
    socket.on('disconnect', function () {
        count--;
        io.sockets.emit('count',{
            'count': count
        });
    });

});

app.use(express.static('./'));

// a convenient variable to refer to the HTML directory
var html_dir = './';

// routes to serve the static HTML files
app.get('*', function(req, res) {
    res.header("Content-Type", "application/json; charset=utf-8");
    res.sendFile('index.html', { root: html_dir });
});

