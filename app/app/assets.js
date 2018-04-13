var svgstore = require('svgstore');
var fs = require('fs');

var sprites = svgstore()
    .add('src', fs.readFileSync('./src/assets/svgs/src/*.svg', 'utf8'));

fs.writeFileSync('./src/assets/svgs/dest/src.svg', sprites);