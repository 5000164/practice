const http = require('http');
const fibonacci = require('./fibonacci');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end([...Array(10).keys()].map(i => i + 1).map(fibonacci).join(', ') + '\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
