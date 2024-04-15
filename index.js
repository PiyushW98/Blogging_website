const express = require('express');
const path = require('path');
//acquiring the user model 
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const Blog = require('./models/blog');

const UserRoute = require("./routes/user");
const BlogRoute = require('./routes/blog')
const checkForAuthenticationCookie = require('./middlewares/auth');

const PORT = 8000;
const app = express();

mongoose.connect('mongodb://localhost:27017/blogApp').then(() => console.log('mongoose connected'));

//we are using EJS for server side rendering 
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve('./public')))

app.get('/', async (req, res) => {
    const allBlogs = await Blog.find({});
    res.render('home', {
        user: req.user,
        blogs: allBlogs,
    });
});
app.use('/user', UserRoute);
app.use('/blog', BlogRoute);

app.listen(PORT, () => {
    console.log(`server has started at http://localhost:${PORT}/`);
})