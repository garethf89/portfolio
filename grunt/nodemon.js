module.exports = {
    dev: {
        script: 'index.js',
        options: {
            livereload: true,
            watch: ["/"],
            env: {
                port: '8080'
            },
            callback: function (nodemon) {
                /** Open the application in a new browser window and is optional **/
                nodemon.on('config:update', function () {
                    // Delay before server listens on port
                    setTimeout(function () {
                        require('open')('http://localhost:8080');
                    }, 1000);
                });
                
                /** Update .rebooted to fire Live-Reload **/
                nodemon.on('restart', function () {
                    // Delay before server listens on port
                    require('fs').writeFileSync('.rebooted', 'rebooted');
                });
            }
        }
    }
};