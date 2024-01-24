const shortner = require('shortid');
const dbModel = require('../model/urlModel');

async function registerURL(req,res){
    const url = req.body.url;
    if(!url) return res.send('ERROR: PLEASE ENTER THE URL');
    console.log(url)
    const shortid = shortner();
    dbModel.create({
        shortID:shortid,
        redirectURL:url
    });
    return res.json({link:`http://localhost:3000/${shortid}`});
};


async function gotoURL(req,res){
    const shortid = req.params.shortID;
    const urlToGo = await dbModel.findOne({shortID:shortid});
    if(!urlToGo){
        return res.json({message:'WEBSITE NOT FOUND'});
    }
    
    console.log(urlToGo.redirectURL);
    
    return res.redirect(urlToGo.redirectURL);
}

module.exports = {
    registerURL,
    gotoURL,
}