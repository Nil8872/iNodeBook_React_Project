const mongoose = require('mongoose');
const connectURI = 'mongodb://localhost:27017';
const connectToMongo = ()=>{
    mongoose.connect(connectURI);
    
}

module.exports  =  connectToMongo