require('dotenv').config()
const http = require('http');
const app = require('./app');
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen({
    host: host,
    port: port,
    exclusive: true
},() => {
    console.log(`Server is runing on http://${host}:${port}`);
});
server.on('error',err => {
    console.log(`Server can't start an error has occured ${err}`);
})