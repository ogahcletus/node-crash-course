const express = require('express');
const { appendFile } = require('fs');

//Express App/Server

const app = express();

//Register view engines
app.set('view engine', 'ejs');
app.set('views', 'Middleware')

//listen for requests

app.listen(3000);

//Middleware
app.use((req, res, next) => {
    console.log('new request made:');
    console.log('host:', req.hostname);
    console.log('path:', req.path);
    console.log('method:', req.method);

    next();
})

app.use((req, res, next) => {
    console.log('in the next middleware:');
    
    next();
})

//Using next()


app.get('/', (req, res) => {
    const blogs = [
        {title: 'My Academic Degree', snippet: "Ahmadu Bello University"},
        {title: 'My Professional Qualifications', snippet:'From various Institutions'},
        {title: 'My Coding skills', snippet: 'From FreeCodeCamp'}
    ]
    res.render('index', {title: 'Home', blogs: blogs})
})

//ROUTING & HTML
app.get('/about', (req, res) => {
   
    res.render('about', {title: 'About'})
})

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create'})
})

//REDIRECTS 
app.get('/about-me', (req, res) => {
    res.redirect('/about')
})


//404 page( use a middleware function app.use)

app.use((req, res) => {
    res.status(404).render('404', {title: '404'})  
})