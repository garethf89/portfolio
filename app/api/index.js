
const express = require('express'),
    http = require('http'),
    app = express(),
    compression = require('compression'),
    routes = require('./routes'),
    bodyParser = require('body-parser'),
    os = require("os"),
    router = express.Router();


//App setup

//local or online?
const port = 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(compression());
app.disable('etag');

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

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

// route middleware that will happen on every request
router.use(function(req, res, next) {

    // log each request to the console
    console.log(req.method, req.url);

    // continue doing what we were doing and go to the route
    next();
});

//let angular handle routing
app.get('/', routes.default);

app.set('port', port);

//send contact form
app.post('/formEmail', function(req,res){
    routes.formEmail(req.body,function(error){
        if(!error){
            res.send({'status' : 'success'});
        }else{
            res.send({'status' : 'error'});
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
var server = http.createServer(app);
server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

var io = require('socket.io')(server);

var count = 0,
    users = [];

// User connects - count
io.on('connection', function (socket) {
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
