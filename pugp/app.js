const express =require("express");
const path =require("path");
const app =express();
const port =80;

app.use('/static',express.static('static'))
app.use(express.urlencoded())

app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))

app.get('/contact',(req,res)=>{
    const params ={}
    res.status(200).render('contact.pug',params);
})

app.get('/',(req,res)=>{
    const params ={}
    res.status(200).render('home.pug',params);
})

app.listen(port ,()=>{
        console.log(`the app started successfuly on port${port}`);
})