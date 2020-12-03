const express = require("express")
const path =require("path");

const app =express();
const port =80;

app.use("/static",express.static('static'))

app.set('view engine','pug')

app.set('views',path.join(__dirname,'view'))


app.get("/demo",(req,res)=>{
    res.status(200).render('demo',{title: 'heyme', message:'hello there'})
})
app.get("/",(req,res)=>{
    res.send("this is the first app with express for practice");

});

app.get("/about",(req,res)=>{
    res.send("this is the about page of first app with express for practice");

});


app.listen(port ,()=>{
    console.log(`the app started successfuly on port${port}`);
})