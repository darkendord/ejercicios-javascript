// Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro).

const prompt = require("prompt");

prompt.start()

prompt.get(["valor"], (err, res) => {
  const { valor } = res;



  if (valor % 2 === 0) {
    console.log(`El numero ${valor} es divisible por 2`)
  } else if (valor % 3 === 0) {
    console.log(`El numero ${valor} es divisible por 3`)
  } else if (valor % 5 === 0) {
    console.log(`El numero ${valor} es divisible por 5`)
  } else if (valor % 7 === 0) {
    console.log(`El numero ${valor} es divisible por 7`)
  } else {
    console.log(`El numero ${valor} no es divisible por los numeros 2, 3, 5 o 7`)
  }
})