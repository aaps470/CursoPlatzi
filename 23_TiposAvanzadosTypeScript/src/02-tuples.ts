/*Las tuplas nos sirven para hacer un array fuertemente tipado especificando el tipo de dato de cada elemento del array así como la cantidad de elementos. Para hacer una tupla lo hacemos de la siguiente manera */

//Forma cotidiana de un array
const prices: (number | string)[] = [1,2,3,4,5];
prices.push(1);
prices.push('hola');


//Forma con tuple
let user: [string, number];
user = ['nicobytes', 15];
// user = [15, 'nicobytes'] //Error porque no sigue el estricto orden de primero string y luego number.

let user2: [number, string, boolean];

//user2 = [12, true, 'hola'] //Error
//user2 = ['hola']; //Error
//user2 = []; //Error
user2 = [12, 'hola', false];

//destructuring de una tupla
const [age, username] = user2;
console.log(username);
console.log(age);
