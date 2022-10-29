// Escribe un programa que pida una frase y escriba las vocales que aparecen.
const prompt = require("prompt");

prompt.start()

prompt.get(["frase"],(err,res)=>{
  const {frase} = res;

  for(let i = 0; i < frase.length; i++){
   if(frase[i] == "a" || frase[i] == "A"){
     console.log(`La frase contiene la vocal: ${frase[i]}`)
   }else if(frase[i] == "e" || frase[i] == "E"){
     console.log(`La frase contiene la vocal: ${frase[i]}`) 
   }else if(frase[i] == "i" || frase[i] == "I"){
     console.log(`La frase contiene la vocal: ${frase[i]}`) 
   }else if(frase[i] == "o" || frase[i] == "O"){
     console.log(`La frase contiene la vocal: ${frase[i]}`) 
   }else if(frase[i] == "u" || frase[i] == "U"){
     console.log(`La frase contiene la vocal: ${frase[i]}`) 
   }
  }
})







///////////////////////////
// PERSONALIZADO
///////////////////////////

// const prompt = require("prompt");

// prompt.start()

// prompt.get(["frase"],(err,res)=>{
//   const {frase} = res;

//   let arr = [];
  
//   for(let i = 0; i < frase.length; i++){
//     switch(frase[i]){
//       case "a":
//         arr.push("a");
//       case "e":
//         arr.push("e");
//       case "i":
//         arr.push("i");
//       case "o":
//         arr.push("o");
//       case "u":
//         arr.push("u");
//         break;
//     }
    
//   }
  
//   let vocales = arr.join(", ")
//   console.log(`La frase contiene las bocales: ${vocales}`)
// })