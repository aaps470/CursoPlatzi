//Hablemos de ECMAScript7

//Definimos un array

let numbers = [1,2,3,7,8];

if (numbers.includes(7)) {
    console.log('Si se incluye el valor 7');
} else {
    console.log('No se encuentra.');
}

//Se incluyo el metodo includes, en este caso en particular nos permite saber si un atributo se encuentra dentro del array
//Tambien se puede utilizar con strings


//Como elevar una potencia?

let base = 4;
let exponent = 3;
let result = base ** exponent;

console.log(result);

//El uso de ** se añadio en esta version de ECMAScript