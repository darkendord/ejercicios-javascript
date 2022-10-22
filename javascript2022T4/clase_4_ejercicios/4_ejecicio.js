// Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales.

const prompt = require("prompt");

prompt.start()

prompt.get(["frase"],(err,res)=>{
  const {frase} = res;

  let a = 0;
  let e = 0;
  let i = 0;
  let o = 0;
  let u = 0;
  
  for(let n = 0; n < frase.length; n++){
   if(frase[n] == "a" || frase[n] == "A"){
     a++
   }else if(frase[n] == "e" || frase[n] == "E"){
     e++ 
   }else if(frase[n] == "i" || frase[n] == "I"){
     i++ 
   }else if(frase[n] == "o" || frase[n] == "O"){
     o++ 
   }else if(frase[n] == "u" || frase[n] == "U"){
     u++ 
   }
  }

  console.log(`La frase contiene ${a} ${a === 1 ? "vocal 'a'" : "vocales 'a'" }, ${e} ${e === 1 ? "vocal 'e'" : "vocales 'e'" }, ${i} vocales "i", ${o} vocales "o", y ${u} vocales "u".`);
})