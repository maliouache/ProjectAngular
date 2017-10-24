'use strict';

var express= require("express");
var cors=require("cors");
var app=express();
app.use(cors());
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoClient=require("mongodb").MongoClient;
var url="mongodb://localhost:27017/ProjetTW";
var assert=require("assert");
let ObjectId=require("mongodb").ObjectId;

mongoClient.connect(url, function (err, db) {
   assert.equal(null, err);

   app.get('/Hello', function (req, res) {
       res.end("Hello");
   });

   app.post('/Users', function(req, res)  {
    console.log("on est laaaaa +++++" + req);

    db.collection("Users2").save(req.body, function(err) {
        if (err) console.error(err);
        else res.send('Data received:\n' + JSON.stringify(req.body));
    })
    });

    
   app.get('/Products/:marque', function (req, res) {
       let marque = req.params.marque;
       let filtre = {}; filtre.brand = marque;
       db.collection("Products").find(filtre)
	 .toArray(function(err, documents) {
            res.setHeader('Content-Type','application/json; charset=utf-8');
            res.setHeader('Access-Control-Allow-Origin','*');
            var json = JSON.stringify(documents);
            console.log("JSON = "); console.log(json);
            res.end(json);
       });
   });

   app.get('/Detail/:id', function (req, res) {
       
       let id = req.params.id;
       let filtre = {}; filtre._id = id;
       console.log("Recherche de l'id : "+id);
       if (/[0-9a-f]{24}/.test(id)) {
           console.log("ok");
           db.collection("Products").find({"_id": ObjectId(id)})
	     .toArray(function(err, documents) {
              res.setHeader('Content-Type','application/json; charset=utf-8');
              res.setHeader('Access-Control-Allow-Origin','*');
              var json = JSON.stringify(documents);
              console.log("JSON = "); console.log(json);
              res.end(json);
          });
        }
   });
		
});

app.listen(8888);
