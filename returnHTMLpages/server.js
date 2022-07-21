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

        //Send a html file
    fs.readFile('./returnHTMLpages/views/index.html', (err, data) =>{
        if(err){
            console.log(err)
            res.end();
        } else {
           // res.write(data); we can pass the data to res.end since we outputing all the content at once
            res.end(data);
        }

    })

})

//invoke the event listener

server.listen(port, hostname, () => {
    console.log(`server listening for requests at ${hostname} on port ${port} `)
})
