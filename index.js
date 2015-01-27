var express = require('express'),
    app = express(),
    compression = require('compression'),
    routes = require('./routes'),
    bodyParser = require('body-parser'),
    os = require("os");


//App setup

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(compression());

app.disable('etag');

//Pre render
app.use(require('prerender-node').set('prerenderToken', 'xP146Gly52Kf5snlwYCB'));

// set up HTML
var html_dir = './';

if(os.hostname().indexOf("ip") > -1){
    html_dir = '/var/www/html';
}

app.use(express.static(html_dir));
app.use('/*', express.static(html_dir, { maxAge: 86400000 }));

//Routes

//let angular handle routing
app.get('/', routes.default);

//send contact form
app.post('/formEmail', function(req,res){
    routes.formEmail(req.body,function(error){
        if(!error){
            res.send('success');
        }else{
            res.send('error');
        }
    });
});

//LASTfm Request
app.post('/lastFm', function(req,res){
    routes.getAlbums(req.body,function(albums){
        res.send(albums);
    });
});

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
