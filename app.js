const express = require('express'); 


const app = express()

app.get("",(req,res)=>{

    res.send("<h1>Hello Express Web Server Using Node.js</h1>");
})

app.get("/about",(req,res)=>{

    res.send({
        Name:"Winhtut",
        Hobby:"Reserach"

    })

})

app.get("/winhtut",(req,res)=>{

    res.send("<h1>This is from WinHtut Page</h1>");
})

app.get("/zanyahmue",(req,res)=>{


    res.send("<h1>Hello Za Nya Hmue</h1>");
})

app.listen(3000,()=>{

    console.log('Server starting up at: port:3000:');
})
