      const express = require('express');
      const router = express.Router();
      const Blog = require('../ModelSchemas/blog');

      
      //Blog Routes
    router.get('/', (req, res) => {
        Blog.find().sort({createdAt: -1}) 
        .then((result) => {
            res.render('index', {title: 'All Blogs', blogs: result})
        })
        .catch((err) => {
            console.log(err)
        })
    })
    
    router.post('/', (req, res) => {
        const blog = new Blog(req.body);
        blog.save()
        .then((result) =>{
            res.redirect('/blogs')
        })
            .catch((err) => {
                console.log(err)
            })
    })
           
                //CREATE NEW BLOG ( must be placed above request id)
    router.get('/create', (req, res) => {
        res.render('create', {title: 'Create A new Blog'})
    });
            //REQUEST PARAMETERS blogs/:id
    router.get('/:id', (req, res) => {
            const id = req.params.id
           
           Blog.findById(id)
           .then((result) => {
                res.render('details', {blog: result, title:'Blog Details'})
           })
           .catch((err) => {
            console.log(err)
           })
    })
    
    // Handler or routes for DELETE REQUEST
    router.delete('/:id', (req, res) => {
        const id = req.params.id;
        Blog.findByIdAndDelete(id)    
        .then((result) =>{
            res.json({'redirect': '/blogs'})
        })
        .catch((err) =>{
            console.log(err)
        })
    
    })
    
    


    module.exports = router;
    