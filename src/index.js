var express = require('express');
var path = require('path');

var server = express();

var options = {
    index: 'index.html'
};

server.all("*", (request, response, next) => {
    let host = request.headers.host;

    if (host.match(/^www\..*/i)) {
        next();
    } else {
        response.redirect(301, "https://www." + host + request.url);
    }
});

server.use('/', express.static('/home/site/wwwroot', options));

const passthroughExtensions = [
    '.js',
    '.ico',
    '.css',
    '.png',
    '.jpg',
    '.jpeg',
    '.woff2',
    '.woff',
    '.ttf',
    '.svg',
    '.eot'
];

server.get('*', (request, response) => {
    if (passthroughExtensions.filter(extension => request.url.indexOf(extension) > 0).length > 0) {
        response.sendFile(path.resolve(request.url));
    } else {
        response.sendFile(path.resolve('index.html'));
    }
});

server.listen(process.env.PORT);