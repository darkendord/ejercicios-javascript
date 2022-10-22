// Escribir un programa que escriba en pantalla los divisores comunes de dos números dados.

const prompt = require("prompt");
prompt.start();

prompt.get(["valor1", "valor2"],(err, res)=>{
  const {valor1,valor2} = res;

  const comunDivisor = (numero1, numero2) =>{
    let arr = []

  for (let i = 0; i <= valor1; i++) {
    numero1 % i === 0 && numero2 % i === 0 ? arr1.push(i) : null;
  }
  return arr;
  }

  const resultado = comunDivisor(valor1, valor2).join()
  console.log(`Los los divisores comunes de ${valor1} y ${valor2} son ${resultado}`)
})