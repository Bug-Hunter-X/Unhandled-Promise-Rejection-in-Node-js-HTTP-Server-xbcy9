const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);
console.log('Server is running on port 8080');
//Error: Unhandled promise rejection, the server is listening on port 8080, but the promise is not handled, leading to an unhandled rejection.