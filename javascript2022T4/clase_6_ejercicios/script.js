const express = require("express");
const PORT = 5000;

const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/paginas/index.html");
});

app.listen(PORT,()=>{
    console.log(`Aplicacion funcionando en puerto ${PORT}`)
});