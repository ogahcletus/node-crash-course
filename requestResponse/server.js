const http = require('http');
const fs = require('fs');

const port = 3000;

const hostname = 'localhost';


const server = http.createServer((req, res) =>{
    //request object
    console.log(req.url, req.method)

    //response object
        //set header Content-Type:
        res.setHeader('Content-Type', 'text/html');

})

//invoke the event listener

server.listen(port, hostname, () => {
    console.log(`server listening for requests at ${hostname} on port ${port} `)
})
