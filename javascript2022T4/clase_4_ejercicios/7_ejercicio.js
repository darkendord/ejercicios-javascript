// Escribir un programa que escriba en pantalla los divisores de un número dado.


const prompt = require("prompt");

prompt.start()

prompt.get(["valor"], (err, res) => {
  const { valor } = res;

  function divisores(num){
  let arr = []
  for (let i = 0; i <= num; i++) {
    num % i === 0 ? arr.push(i) : null;
  }
  return arr;
  }
  
  const numerosDivisores = divisores(valor).join();

  
  console.log(`El numero ${valor} es divisible entre ${numerosDivisores}`)
})