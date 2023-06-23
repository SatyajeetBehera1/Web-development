const express = require("express");
const path = require("path")
const fs = require('fs');
const app = express();
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/contactDance', {useNewUrlParser: true});
const bodyparser = require("body-parser")
const port = 80;

//EXPRESS SPECIFIC STUFF
// app.use(express.static('static',Options));
app.use('/static',express.static('static')); // For serving static files
app.use(express.urlencoded());

//Define mongoose schema
var contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String,
});

var Contact = mongoose.model('Contact',contactSchema)

//PUG SPECIFIC STUFF
app.set('view engine', 'pug'); //Set the template engine as pug
app.set('views', path.join(__dirname, 'views')); //Set the view directory

//Endpoints
app.get('/',(req, res)=>{   
    const params = { }
    res.status(200).render('home.pug',params);
});
app.get('/contact',(req, res)=>{   
    const params = { }
    res.status(200).render('contact.pug',params);
});

app.post('/contact',(req, res)=>{   
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send("This item has been save to the database")
    }).catch(()=>{
        res.status(400).send("Item was not saved to the database")
    });
    // res.status(200).render('contact.pug');
});

//Start the server
app.listen(port,()=>{
    console.log(`The application started sucessfully on port ${port}`);
});
