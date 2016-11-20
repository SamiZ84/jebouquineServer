var mongoose = require('./db.js').mongoose; 
 
exports.schemaLivre = new mongoose.Schema({ 
        Id : {type : Number,index:true, unique: true,required: true }, 
        Nom: { type: String, maxlength: 50 }, 
        Auteur: String, 
        Description: String, 
        Langue: String, 
        Prix: Number, 
        ISBN: String, 
        MaisonEdition: String, 
        NombrePages: Number, 
        Poids: String, 
        Disponibilité: Boolean, 
        DateSortie:String, 
        UrlImage: String, 
        Categorie: String, 
        Quantite: Number, 
        DateDerniereCommande: { type: Date, default: Date.now } 
    } 
); 
 
exports.schemaCategorie = new mongoose.Schema({ 
        Id :  {type : String,index:true, unique: true,required: true }, 
        Libelle: String 
 
    } 
); 
 
exports.schemaCompte = new mongoose.Schema({ 
        Nom : {type : String,uppercase : true}, 
        Prenom: String, 
        Email:  {type : String,index:true, unique: true,required: true }, 
        Password: {type : String,required : true} 
    } 
); 