//Using Middlewares to serve our Static files(CSS, Assetsimages)

const express = require('express');
const { appendFile } = require('fs');
const morgan = require('morgan')

//Express App/Server

const app = express();

//Register view engines
app.set('view engine', 'ejs');
app.set('views', 'StaticFiles')

//listen for requests

app.listen(3000);

//Middlewaare for staticFiles for public views
    app.use(express.static('public'));


//Middleware for logging
app.use(morgan('dev'));

//Can also use tiny instead of dev
app.use(morgan('tiny'));

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