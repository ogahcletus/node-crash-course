const express = require('express');
const { appendFile } = require('fs');
const morgan = require('morgan');
const blogRoutes = require('./Routes/blogRoutes')
//Express App/Server

const app = express();
// Connection to the MongoDB database

const mongoose = require('mongoose');
const { render } = require('ejs');

const dbURI= 'mongodb+srv://dBuser1:dBuser1@cletus1.qcunw.mongodb.net/NetNinja-NodeJS?retryWrites=true&w=majority'

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true})
  .then((result)  =>app.listen(3000))
  
  .catch((err) => console.log(err))

//Register view engines
app.set('view engine', 'ejs');
app.set('views', 'ExpressRouter');

//Middlewaare for staticFiles for public views
    app.use(express.static('public'));
//Middleware for accepting form data
    app.use(express.urlencoded({ extended: false }))

//Middleware for logging
app.use(morgan('dev'));

//Can also use tiny instead of dev
app.use(morgan('tiny'));

        //Basic Routes
app.get('/', (req, res) => {
    res.redirect('/blogs')
})

        //Blog Routes

//app.use(blogRoutes); commented out to scope

//OR preferably scope /blog out ad remove it from the blogRoutes

app.use('/blogs', blogRoutes)

app.get('/about', (req, res) => {
   
    res.render('about', {title: 'About'})
})

 //404 page( use a middleware function app.use)

app.use((req, res) => {
    res.status(404).render('404', {title: '404'})  
})