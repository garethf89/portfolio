var express = require('express'),
    app = express(),
    compression = require('compression');

app.use(compression());
app.disable('etag');

// a convenient variable to refer to the HTML directory
var html_dir = './';

app.use(express.static(html_dir));
app.use('/*', express.static(html_dir, { maxAge: 86400000 }));

// Loading socket.io
var io = require('socket.io').listen(app.listen(8080));

var count = 0,
    users = [];

// User connects - count
io.sockets.on('connection', function (socket) {
    
    count++;
    io.sockets.emit('count',{
        'count': count
    });
            
    //reduce counter when user leaves
    socket.on('disconnect', function () {
        count--;
        io.sockets.emit('count',{
            'count': count
        });
    });

});


// routes to serve the static HTML files
app.get('/', function(req, res) {
    res.header("Content-Type", "application/html; charset=utf-8");
    res.sendFile('index.html', { root: html_dir });
});

