/* Requires */
const express=require('express');
const path=require('path');
const ejs = require('ejs');
const bodyparser = require('body-parser');

/* server */
const app = express();

/* sets and uses */
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname + '/public')));
app.set('view engine', 'ejs');

/* handle requests */
app.get('/',(req,res)=>{
    res.render('Login.ejs',{err:''});
})

app.get('/tologin',(req,res)=>{
    res.render('Login.ejs',{err:''});
})

app.get('/tosignup',(req,res)=>{
    res.render('Signup.ejs',{err:''});
})

/* listening */
app.listen(8000);