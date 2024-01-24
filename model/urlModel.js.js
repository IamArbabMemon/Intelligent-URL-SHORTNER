const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/URL_DB').then(()=>console.log('DATABSE HAS BEEN CONNECTED'));

const schema = new mongoose.Schema({
    shortID:{
        type:String,
        required : true,
        unique:true
    },

    redirectURL : {
        type:String,
        required:true
    }
});

const URL = mongoose.model('URL',schema);

module.exports = URL;