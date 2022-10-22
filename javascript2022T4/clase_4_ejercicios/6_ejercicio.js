// Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay que decir todos por los que es divisible).


const prompt = require("prompt");

prompt.start()

prompt.get(["valor"], (err, res) => {
  const { valor } = res;

  let numero2 = false;
  let numero3 = false;
  let numero5 = false;
  let numero7 = false;
  let noDivisible = ""

  if (valor % 2 === 0) {
    numero2 = true;
  } 
  if(valor % 3 === 0) {
    numero3 = true;
  } 
  if(valor % 5 === 0) {
    numero5 = true;
  } 
  if(valor % 7 === 0) {
    numero7 = !numero7;
  } 

  if(valor % 2 !== 0 && valor % 3 !== 0 && valor % 5 !== 0 && valor % 7 !== 0){
    noDivisible = `El valor ${valor} no es divisible por 2, 3, 5 o 7`;
  }


    console.log(noDivisible ? noDivisible : `El numero ${valor} es divisible por ${numero2 ? "2 ": ""}${numero3 ? "3 ": ""}${numero5 ? "5 ": ""}${numero7 ? "7": ""}`)

  // const str = 0
  // console.log(str == false ? false : true)
  // console.log(numero7)
})