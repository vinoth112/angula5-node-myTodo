var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

var {
    material,
    users
} = require('./models/data');

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test');

var response = {};




var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(__dirname));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/todolist', function(req, res) {

    material.find((err, data) => {
        if (err) {
            return console.log('Error in getting material list ', err);
            res.status(400).send({
                status: false,
                msg: 'Internal server error',
                err
            });
        }
        console.log('get list  Success: ', data);
        res.send({
            status: true,
            data: data
        });
    })

});

app.post('/add', function(req, res) {

    let newMatDoc = new material({
        id: req.body.id,
        itemName: req.body.itemName,
        sellerName: req.body.sellerName,
        email: req.body.email,
        location: req.body.location
    });
    newMatDoc.save().then((doc) => {
        console.log(JSON.stringify(`Saved to material: ${doc}`));
        res.send({
            status: true,
            data: doc
        });
    }, (err) => {
        console.log('Unable to save material: ', err);
        res.status(400).send({
            status: false,
            msg: 'Internal server error',
            err
        });
    });

});


app.post('/delete', function(req, res) {
    var conditions = {
        id: req.body.id
    }
    material.remove(conditions, function(err) {
        if (err) {
            res.status(400).send({
                status: false,
                msg: 'Internal server error',
                err
            });
        }
        res.send({
            status: true,
            msg: 'success'
        });
    });
});


app.get('/retrieve/:id', function(req, res) {
    var response = req.params.id;
    var editEmployee = [];
    for (var i = 0; i < employee.length; i++) {
        if (employee[i].id == response) {
            editEmployee.push(employee[i]);
        }
    }
    res.send({
        data: editEmployee
    });
});


app.post('/modify', function(req, res) {


    var conditions = {
            id: req.body.id
        },
        update = {
            itemName: req.body.itemName,
            sellerName: req.body.sellerName,
            email: req.body.email,
            location: req.body.location
        };

    material.update(conditions, update, (e, n) => {
        if (e) {
            res.status(400).send({
                status: false,
                msg: 'Internal server error',
                err
            });
        }
        res.send({
            status: true,
            msg: 'success'
        });
    });
    // res.send({ message : 'success' });
});

app.post('/login', function(req, res) {
    response = req.body;
    userAttempt = 0;
    if (response.userName === 'admin' && response.password === 'admin') {
        res.send({
            message: 'success'
        });
    } else {
        res.send({
            message: 'error'
        });
    }
});



app.listen(PORT, function() {
    console.log('Server listening on ' + PORT);
});