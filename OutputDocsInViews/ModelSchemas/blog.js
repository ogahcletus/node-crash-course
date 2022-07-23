const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define Blog Schemas
const blogSchema = new Schema ({
    title:{
        type: String,
        required: true
    },

    snippet: {
        type: String,
        required: true
    },

    body:{
        type: String,
        required : true
    },
},
     {timestamps: true}
)

//Define blog Model based on the blogSchema

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;