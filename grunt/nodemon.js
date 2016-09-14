module.exports = {
    dev: {
        script: 'api/index.js',
        options: {
            livereload: true,
            env: {
                port: '8081'
            },
            callback: function (nodemon) {
                /** Open the application in a new browser window and is optional **/
                nodemon.on('config:update', function () {
                    // Delay before server listens on port
                    setTimeout(function () {
                        require('open')('http://localhost:8081');
                    }, 1000);
                });
                
            }
        }
    }
};