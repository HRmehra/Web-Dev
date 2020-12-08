const express =require("express");
const path =require("path");
const app =express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contact', {useNewUrlParser: true , useUnifiedTopology: true});
const port =80;

const contactschema = new mongoose.Schema({
    name: String,
    address: String,
    number: String,
    email: String,
  });

  const contact = mongoose.model('contact', contactschema);

app.use('/static',express.static('static'))
app.use(express.urlencoded())

app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))


app.get('/',(req,res)=>{
    const params ={}
    res.status(200).render('home.pug',params);
})

app.get('/contact',(req,res)=>{
    const params ={}
    res.status(200).render('contact.pug',params);
})

app.post('/contact',(req,res)=>{
    var data= new contact(req.body);
    data.save().then(()=>{
        res.send("this has been saved to db")
    }).catch(()=>{
        res.status(400).send("was not stored in db")
    })
   
})

app.listen(port ,()=>{
        console.log(`the app started successfuly on port${port}`);
})
