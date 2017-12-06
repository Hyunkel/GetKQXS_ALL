var mongoose = require("mongoose");

function ConnetMongoDb() {
    mongoose.connect('mongodb://localhost/DataKQXS_ALL',(err,db)=>{
        if(err) throw err;
        console.log('Connect Sucsses DataKQXS_ALL');
    });
}
module.exports = ConnetMongoDb;