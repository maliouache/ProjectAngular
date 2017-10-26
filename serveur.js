'use strict';

var express= require("express");
var cors=require("cors");
var app=express();
app.use(cors());
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var jsonParser = bodyParser.json();

var mongoClient=require("mongodb").MongoClient;
var url="mongodb://localhost:27017/ProjetTW";
var assert=require("assert");
let ObjectId=require("mongodb").ObjectId;

mongoClient.connect(url, function (err, db) {
   assert.equal(null, err);
   app.use(bodyParser.json());
   app.get('/Hello', function (req, res) {
       res.end("Hello");
   });

   app.post('/Users', jsonParser,function(req, res)  {
    db.collection("Users3").save(req.body, function(err) {
        if (err) console.error(err);
        else res.send('Data received:\n' + JSON.stringify(req.body));
    })
    });

    app.post('/Users/mail', jsonParser,function (req, res) {
        console.log("on est laaaaa2222")
        let mail = req.body.mail_adress;
        let filtre = {}; filtre.mail_adress = mail;
        db.collection("Users3").find(filtre)
      .toArray(function(err, documents) {
            res.setHeader('Content-Type','application/json; charset=utf-8');
            res.setHeader('Access-Control-Allow-Origin','*');
             var json = JSON.stringify(documents);
             res.end(json);
        });
    });

    
   app.get('/Products/:marque', function (req, res) {
       let marque = req.params.marque;
       let filtre = {}; filtre.brand = marque;
       db.collection("Products").find(filtre)
	 .toArray(function(err, documents) {
            res.setHeader('Content-Type','application/json; charset=utf-8');
            res.setHeader('Access-Control-Allow-Origin','*');
            var json = JSON.stringify(documents);
            res.end(json);
       });
   });
   
   app.get('/Category/:category', function (req, res) {
        let category = req.params.category;
        let filtre = {}; filtre.category = category;
        db.collection("Products").find(filtre)
    .toArray(function(err, documents) {
            res.setHeader('Content-Type','application/json; charset=utf-8');
            res.setHeader('Access-Control-Allow-Origin','*');
            var json = JSON.stringify(documents);
            res.end(json);
    });
});

   app.get('/Detail/:id', function (req, res) {
       
       let id = req.params.id;
       let filtre = {}; filtre._id = id;
       if (/[0-9a-f]{24}/.test(id)) {
           db.collection("Products").find({"_id": ObjectId(id)})
	     .toArray(function(err, documents) {
              res.setHeader('Content-Type','application/json; charset=utf-8');
              res.setHeader('Access-Control-Allow-Origin','*');
              var json = JSON.stringify(documents);
              res.end(json);
          });
        }
   });
		
});

app.listen(8888);
