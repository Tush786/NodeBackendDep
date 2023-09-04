const express=require('express');
const app=express();
require('dotenv').config()
const PORT=process.env.PORT;

app.get('/',(req,res)=>{
    res.send('Base Url')
})

app.get('/about',(req,res)=>{
    res.send('About Page')
})

app.listen(PORT,()=>{
    console.log(`Server Run on Post ${PORT}`)
})