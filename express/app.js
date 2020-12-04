const express = require("express")
const path =require("path");
const fs =require("fs");

const app =express();
const port =80;

app.use("/static",express.static('static'))//for serving ststic files
app.use(express.urlencoded())

app.set('view engine','pug')//set template as pug
app.set('views',path.join(__dirname,'views'))//set vies in directory

//end points
app.get('/',(req,res)=>{
    const con ='This is some rubbish i wrote for the sake of it'
    const params ={'title':'pug is going up for render',"content":con}
    res.status(200).render('index.pug',params);
})

app.post('/',(req,res)=>{

    //console.log(req.body);
    name = req.body.name
    age = req.body.age
    number = req.body.number
    address = req.body.address
    more = req.body.more

    let outputoryt = `the naem is${name}, ${age} years old ,number is ${number} , live at ${address} .more ${more}`
    fs.writeFileSync('output.txt',outputoryt)

    const params={'message':'your form has been submitted succesfully'}
    res.status(200).render('index.pug',params);
})


// app.get("/demo",(req,res)=>{
//     res.status(200).render('demo',{title: 'heyme', message:'hello there'})
// })
// app.get("/",(req,res)=>{
//     res.send("this is the first app with express for practice");

// });

// app.get("/about",(req,res)=>{
//     res.send("this is the about page of first app with express for practice");

// });


 app.listen(port ,()=>{
     console.log(`the app started successfuly on port${port}`);
 })