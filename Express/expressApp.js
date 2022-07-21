const express = require('express');
const { appendFile } = require('fs');

//Express App/Server

const app = express();

//listen for requests

app.listen(3000);

app.get('/', (req, res) => {
    //res.send('<h1>Home Page</h1>')
    res.sendFile('./views/index.html', {root: __dirname})
})

//ROUTING & HTML
app.get('/about', (req, res) => {
   // res.send('<h1>About Page</h1>')

   res.sendFile('./views/about.html',{root: __dirname} )
})

//REDIRECTS 
app.get('/about-me', (req, res) => {
    res.redirect('/about')
})


//404 page( use a middleware function app.use)

app.use((req, res) => {
    res.status(404).sendFile('./views/404.html',{root: __dirname} )  
})