/* REQUIRES */
const express = require('express');
const bodyparser = require('body-parser');
const ejs = require('ejs');
const path = require('path');
const fs = require('fs');
const mongo = require('mongodb').MongoClient;

/* SERVER */
const app = express();

/* USES AND SETS */
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname + '/public')));
app.set('view engine', 'ejs');

/* VARIABLES */
const url = "mongodb+srv://aditya:lpacafcs@cluster0.5otyg.mongodb.net/test"

/* REQUESTS */
app.get('/', (req, res) => {
    res.render('Login.ejs', { err: '' });
});

app.get('/tosignup', (req, res) => {
    res.render('Signup.ejs', { err: '' });
});

app.get('/tologin', (req, res) => {
    res.render('Login.ejs', { err: '' });
})

app.post('/login', (req, res) => {
    var user = req.body.user;
    var pass = req.body.pass;
    var cred = '';
    mongo.connect(url, (err, db) => {
        var database = db.db('practice');
        database.collection('logindata').find({ user: user, pass: pass }).toArray((err, data) => {
            if (err) console.log(err);
            cred = data;
            db.close();
            if (cred.length === 0) {
                res.render('Login.ejs', { err: 'wrong username and password' });
            } else {
                res.render('Welcome.ejs', { user: cred[0].name });
            }
        })
    })
})

app.post('/signup', (req, res) => {
    var user = req.body.user;
    var pass = req.body.pass;
    var cpass = req.body.cpass;
    var name = req.body.name;
    var email = req.body.email;
    if (cpass === pass && pass !== '' && user !== '') {
        mongo.connect(url, (err, db) => {
            var database = db.db('practice');
            database.collection('logindata').insertOne({ name: name, user: user, pass: pass, email: email }, (err, data) => {
                if (err) console.log(err);
                db.close();
                res.render('Welcome.ejs', { user: name });
            })
        })
    } else {
        res.render('Signup.ejs', { err: 'Confirmation password and password are not equal' });
    }
})

/* LISTEN TO PORT */
app.listen(3000 || process.env.PORT);