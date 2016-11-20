var schemas = require('./schema'); 
var mongoose = require('./db').mongoose; 
 
exports.Livre = mongoose.model('Livre', schemas.schemaLivre); 
exports.Categorie = mongoose.model('Categorie', schemas.schemaCategorie); 
exports.Compte = mongoose.model('Compte', schemas.schemaCompte);