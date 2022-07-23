const express = require('express');
const { appendFile } = require('fs');
const morgan = require('morgan');
const Blog = require('./ModelSchemas/blog');

//Express App/Server

const app = express();
// Connection to the MongoDB database

const mongoose = require('mongoose');

const dbURI= 'mongodb+srv://dBuser1:dBuser1@cletus1.qcunw.mongodb.net/NetNinja-NodeJS?retryWrites=true&w=majority'

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true})
  .then((result)  =>app.listen(3000))
  
  .catch((err) => console.log(err))

//Register view engines
app.set('view engine', 'ejs');
app.set('views', 'MongoDB');

//listen for requests

//app.listen(3000);  Commented out to ensure that server does not respond to users without first establishing connection to the Mongo Database

//Middlewaare for staticFiles for public views
    app.use(express.static('public'));


//Middleware for logging
app.use(morgan('dev'));

//Can also use tiny instead of dev
app.use(morgan('tiny'));

//Mongoose and MongoDB Sandbox routes

//To create collection or docs
app.get('/add-blog', (req, res) => {
    const blog = new Blog ({
        title: 'The Kingdom of God is within you!',
        snippet:'Internal world is our world of feelings',
        body: 'Our world within is equally important as our world without'
    })
        blog.save()
        .then((result) => {
            res.send(result)
        })
             .catch((err) => {
            console.log(err)
        })
   })

   //To retrieve all docs / blogs from MongoDB
   app.get('/all-blogs', (req, res) => {
    Blog.find()
    .then((result) => {
        res.send(result)
    })
        .catch((err) => {
            console.log(err)
        })
   });


   //To retrieve a single blog from MongoDB
   app.get('/single-blog', (req, res) => {
    Blog.findById('62db32925e349aff6371f69b')
         .then((result) => {
         res.send(result)
      })
        .catch((err) =>{
            console.log(err)
        })
    })

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