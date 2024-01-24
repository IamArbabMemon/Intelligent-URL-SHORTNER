const express = require('express');
const app = express();
const OpenAI = require('openai');
const path = require('path');
const {registerURL,gotoURL} = require('./controller/urlHandlers.js');
const openai = new OpenAI({
    apiKey:'' //Insert Your API KEY Here 
  })
  

app.use(express.json());

app.get('/',(req,res)=>{
    return res.sendFile(path.join(__dirname,'index.html'))
})

app.post('/register',registerURL);

app.get('/:shortID',gotoURL);


app.get('/getDetails/:url',async (req,res)=>{
    const url = req.params.url;
    if(!url) return res.send('ERROR: PLEASE ENTER THE URL');
    console.log(url)
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content:"Give me short and consice details about the website link I have given "+url}],
        model: 'gpt-3.5-turbo',
      })
      const reply = chatCompletion.choices[0].message.content
      return res.json({details:reply})
    
})


app.listen(3000,()=>{
    console.log('SERVER IS LISTENING');
});



