//--------------Cuarta clase: Null y Unefined -----------------------

//Explicita

//Cuando defines una variable como null esta solo puede recibir como valor null, ninguna otra.
let nullVariable: null;

nullVariable = null;
// nullVariable = 1; //Error

//Cuando solamente le das el valor null todavia puede recibir otro valor porque lo pone como any, como este caso que se le da un string despues de null se quedara con ese valor string.
let otherVariable = null;
otherVariable = 'test';

console.log('nullVariable ', nullVariable);
console.log ('otherVariable ', otherVariable);


//Undefined

//Cuando defines una variable como undefined esta solo puede recibir como valor undefined, ninguna otra.
let undefinedVariable: undefined = undefined;
//undefinedVariable = 'test'; //Error

//Cuando solamente le das el valor undefined todavia puede recibir otro valor porque lo pone como any, como este caso que se le da un number despues del undefined se quedara con ese valor number.
let otherUndefined = undefined;
otherUndefined = 1;

console.log('undefinedVariable ', undefinedVariable);
console.log ('otherUndefined ', otherUndefined);



/*Null y Undefined se pueden asumor como subtipos de los otros tipos de datos.

Significa que se puede asignar null y undefined a una variable de tipo string, por ejemplo.*/


// Null y Undefined: Como subtipos

let albumName: string;
//albumName = null; //Error
//algumName = undefined; //Error

/*La Opcion --strictNullChecks
Solo permite asignar null y undefined a una variable de tipo any o sus tipos respectivos
Ayuda a evitar errores comunes en programacion de apps en el ambito JavaScript*/

//--strictNullChecks
let albumName2: string;
//albumName = null;
//algumName = undefined;