const express = require('express');
const path = require('path');
//acquiring the user model 
const mongoose = require('mongoose');

const UserRoute = require("./routes/user");

const PORT = 8000;
const app = express();

mongoose.connect('mongodb://localhost:27017/blogApp').then(() => console.log('mongoose connected'));

//we are using EJS for server side rendering 
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.render('home');
});
app.use('/user', UserRoute);

app.listen(PORT, () => {
    console.log(`server has started at http://localhost:${PORT}/`);
})