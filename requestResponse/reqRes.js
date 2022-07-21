const http = require('http');

const port = 3000;

const hostname = 'localhost';


const server = http.createServer((req, res) =>{
    //request object
    console.log(req.url, req.method)

    //response object
        //set header Content-Type:
        res.setHeader('Content-Type', 'text/html');//means we are sending back plain text to the browser

        // To actually send this to the browser, we use the write method to write to the response:
        res.write('<head><link ref="stylesheets" href=""</link></head>')
        res.write('<h1>Hello Cletus!</h1>');

        //To end the response

        res.end();

})

//invoke the event listener

server.listen(port, hostname, () => {
    console.log(`server listening for requests at ${hostname} on port ${port} `)
})
