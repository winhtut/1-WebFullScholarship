const express = require('express'); 
const path = require('path');


const app = express()

app.get("",(req,res)=>{

    res.sendfile(path.join(__dirname+'/home.html'));
})

app.get("/about",(req,res)=>{

    res.sendfile(path.join(__dirname+'/about.html'));

})

app.get("/winhtut",(req,res)=>{

    res.sendfile(path.join(__dirname+'/winhtut.html'));
})



app.listen(3000,()=>{

    console.log('Server starting up at: port:3000:');
})
