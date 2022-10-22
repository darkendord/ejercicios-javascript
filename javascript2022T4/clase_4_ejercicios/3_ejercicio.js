// Escribe un programa que pida una frase y escriba cuántas de las letras que tiene son vocales.


const prompt = require("prompt");

prompt.start()

prompt.get(["frase"],(err,res)=>{
  const {frase} = res;

  let vocales = 0;
  for(let i = 0; i < frase.length; i++){
   if(frase[i] == "a" || frase[i] == "A"){
     vocales++
   }else if(frase[i] == "e" || frase[i] == "E"){
     vocales++ 
   }else if(frase[i] == "i" || frase[i] == "I"){
     vocales++ 
   }else if(frase[i] == "o" || frase[i] == "O"){
     vocales++ 
   }else if(frase[i] == "u" || frase[i] == "U"){
     vocales++ 
   }
  }

  console.log(`La frase contiene ${vocales} vocales.`);
})