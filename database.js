const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/URL_DATABASE');
const dbModel = mongoose.model('urlCollection',new mongoose.Schema({},{strict:false}));

module.exports = {dbModel};


