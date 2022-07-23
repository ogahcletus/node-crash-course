const express = require('express');
const { appendFile } = require('fs');
const morgan = require('morgan');
const Blog = require('./ModelSchemas/blog');

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
app.set('views', 'OutputDocsInViews');

//listen for requests

//app.listen(3000);  Commented out to ensure that server does not respond to users without first establishing connection to the Mongo Database

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


app.get('/about', (req, res) => {
   
    res.render('about', {title: 'About'})
})

         //Blog Routes
app.get('/blogs', (req, res) => {
    Blog.find().sort({createdAt: -1}) //-1 means to sort in a descending order from the oldest to the newest
    .then((result) => {
        res.render('index', {title: 'All Blogs', blogs: result})
    })
    .catch((err) => {
        console.log(err)
    })
})

app.post('/blogs', (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
    .then((result) =>{
        res.redirect('/blogs')
    })
        .catch((err) => {
            console.log(err)
        })
})

        //REQUEST PARAMETERS blogs/:id
app.get('/blogs/:id', (req, res) => {
        const id = req.params.id
       //To find the blog associated with that id:
       Blog.findById(id)
       .then((result) => {
            res.render('details', {blog: result, title:'Blog Details'})
       })
       .catch((err) => {
        console.log(err)
       })
})

// Handler or routes for DELETE REQUEST
app.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)

    //since the above is async, we again apply the then method
    .then((result) =>{
        res.json({'redirect': '/blogs'})
    })
    .catch((err) =>{
        console.log(err)
    })

})

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create'})
})



//404 page( use a middleware function app.use)

app.use((req, res) => {
    res.status(404).render('404', {title: '404'})  
})