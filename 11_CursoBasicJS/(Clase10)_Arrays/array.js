var frutas = ["Manzana", "Plátano", "Cereza", "Fresas"];

console.log(frutas);

console.log(frutas.length); // longitud o numero de elementos
console.log(frutas[n]); // acceder al elemento por medio de index

//Mutar o alterar Array

var masFrutas = frutas.push("Uvas") //añadir elementos al final del array

var ultimo = frutas.pop()//Eliminar el último elemento del Array

var nuevaLongitud = frutas.unshift("Uvas");//añadir elemento al inicio del array

var borrarFruta = frutas.shift();//Borra el primer elemento

var posicion = frutas.indexOf("Cereza");//Devuelve el index o posicion del elemento