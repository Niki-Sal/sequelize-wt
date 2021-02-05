// 1 - environment
require('dotenv').config();

// 2 - imports
const express = require('express');
const axios = require('axios');
const ejsLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');
const db = require('./models')

// 3 - App set up
const app = express();
app.set('view engine', 'ejs');

// 4 - App Middleware (app.use)
app.use(ejsLayouts);
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// 5 - Routes (controllers)
app.get('/', (req, res) => {
    res.send('Welcome to my App'); 
});

app.get('/coders', (req, res)=> {
    // we need to get all users from database
    db.user.findAll()
    .then((users)=> {
        // we need to render the index.ejs page
        // we need to pass the users data to it
        res.render('index', { users: users })
    })

})

app.get('/coders/new' ,(req, res) =>{
    console.log ('This is the new route')
    res.render('new')
})


//POST route
app.post('/coders', (req, res) =>{
    const userInput = req.body //This is an object
    //make sure the data types are corect before adding to database
    let updateAge = Number(userInput.age)
    let firstName = userInput.firstName;
    let lastName = userInput.lastName;
    let email = userInput.email;
    console.log(firstName)
    //insert into database
    db.user.create({
        //firstName is as firstName: firstName (when they are the exact same)
        firstName,
        lastName,
        email,
        age: updateAge
    })
    .then(newCoder =>{
        //you can put only newUser, but we want the short format object
        console.log(newCoder.get())
        res.redirect('/coders')
    })
})


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});