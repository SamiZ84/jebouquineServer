var express = require('express');
var models = require('./model.js'); 
var fixtures = require('./fixtures.js');
var bodyParser = require('body-parser'); 
var contoller = require('./controller'); 

var app = express(); 

var cors = require('cors'); 
app.use(cors());

// accept json body in request
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

 // define URLs for each action
app.get('/Livres', contoller.RecupererLivres); 
app.get('/Livres/:categorie', contoller.RecupererLivresParCategorie); 
app.get('/Livre/:Id', contoller.RecupererLivreParId); 
app.get('/Categories', contoller.RecupererCategories); 
app.get('/Comptes', contoller.RecupererComptes);
app.post('/Categorie/Creer', contoller.CreerCategorie); 
app.post('/Livre/Creer', contoller.CreerLivre); 
app.post('/Compte/Creer', contoller.CreerCompte); 
app.post('/Login', contoller.Login); 

//Route de Test 
app.get('/',function(res,req) 
{ 
    console.log("Bonjour NodeJS");
    req.send("Bonjour NodeJS"); 
}) 
 
app.listen(8080); 