const express = require('express');
require('dotenv') .config();
const app = express()
const port = 5500;

app.get('/',(req,res)=>{
    res.send('Hello World!');
    console.log("this is home page")
});
app.get('/login',(req,res)=>{
    res.send('<h1>yes this is login   </h1>');
    console.log("this is home page")
});


app.get('/twitter',(req,res)=>{
    res.send('This is twitter page')
})


app.listen(process.env.PORT ,()=>{
console.log(`port is runing ${port}`)
})