const http = require('http');

const port = 3000;

const hostname = 'localhost';

const server = http.createServer((req, res) =>{
    console.log('request made')
})

//invoke the event listener

server.listen(port, hostname, () => {
    console.log(`server listening for requests at ${hostname} on port ${port} `)
})

// localhost = domain name on the web that takes us back to a specific ip address called the loop back ip address that points directly back to our own computer
// localhost ip address= 127.0.0.1

//port numbers = like a gateway o specific channels on our computer

//localhost:port number