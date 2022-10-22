// 1. Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a.
const prompt = require("prompt");

prompt.start();

prompt.get(["frase"],(err, res)=>{
  const {frase} = res;

  let repeticion = 0;
  for(let i = 0; i < frase.length; i++){
    frase[i] === "a" || frase[i] === "A" ? repeticion++ : null
  }
  
console.log(`La frase incertada contiene ${repeticion} ${repeticion === 1 ? "letra" : "letras"} "a"`);
})
// console.log("Hello world");