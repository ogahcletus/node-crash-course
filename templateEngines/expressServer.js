const express = require('express');
const { appendFile } = require('fs');

//Express App/Server

const app = express();

//Register view engines
app.set('view engine', 'ejs');
app.set('views', 'templateEngines')

//listen for requests

app.listen(3000);

app.get('/', (req, res) => {
    
    res.render('index')
})

//ROUTING & HTML
app.get('/about', (req, res) => {
   
    res.render('about')
})

app.get('/blogs/create', (req, res) => {
    res.render('create')
})

//REDIRECTS 
app.get('/about-me', (req, res) => {
    res.redirect('/about')
})


//404 page( use a middleware function app.use)

app.use((req, res) => {
    res.status(404).render('404')  
})