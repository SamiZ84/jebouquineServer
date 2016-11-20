var mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost:27017/jebouquine'); 
 
var db = mongoose.connection; 
db.on('error',function(error){ 
    console.log('******** Erreur Mongoose **********'); 
    console.log(error); 
    console.log('******** Erreur Mongoose **********'); 
}); 
 
db.on('open',function(){ 
    console.log('******** IS OPEN server *********'); 
}); 
 
exports.mongoose = mongoose; 