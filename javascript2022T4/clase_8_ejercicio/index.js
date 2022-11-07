const express = require("express");

const app = express();
app.use(express.static("."));


app.get("/", function(req,res){
    res.sendFile(__dirname + "/vistas/index.html");
})
app.get("/formulario", function(req,res){
    res.sendFile(__dirname + "/vistas/formulario.html");
})

app.listen(8000,()=>{
    console.log(`Funcionando en puerto http://localhost:8000/`)
})
