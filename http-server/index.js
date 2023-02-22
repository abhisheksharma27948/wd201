const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
const { argv } = require('process');

const port = argv.includes('--port') ? argv[argv.indexOf('--port') + 1] : 3000;

const server = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url);
    let filePath = '.' + reqUrl.pathname;
    if (filePath === './') filePath = './home.html';

    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
    };

    const contentType = mimeTypes[extname] || 'application/octet-stream';

    if (reqUrl.pathname === '/registration') {
        filePath = './registration.html';
    }

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code == 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 Not Found</h1><p>The page you were looking for does not exist.</p>');
            } else {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end(`<h1>500 Internal Server Error</h1><p>${error}</p>`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${3000}/`);
});
