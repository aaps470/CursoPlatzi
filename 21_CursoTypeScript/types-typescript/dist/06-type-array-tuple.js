"use strict";
//-------------- Sexta clase: Arrays -------------------------
//Corchetes []
//Tipo Explicito
let users;
users = ['Andres', 'paparazzi', 'lensqueen'];
//users = [1, true, 'test']; //Error porque ya users esta definido como string, no puede aceptar otro dato
//Tipo Inferido
let otherUsers = ['Andres', 'paparazzi', 'lensqueen'];
//users = [1, true, 'test']; //Error
//Array <TIPO>
let pictureTitle;
pictureTitle = ['Favorite Sunset', 'Vacation Time', 'Landscape'];
//Accediendo a los valores en un Array
console.log('First User ', users[0]);
console.log('First Title ', pictureTitle[0]);
//Propiedades en Array
console.log('users.length', users.length);
//Uso de funciones en Arrays
users.push('aPlatziUser');
users.sort();
console.log('users ', users);
//Si queremos tener mas de solo tipo de dato en un array se hace lo siguiente:
let arrayExample;
arrayExample = ['Soy Andres y este es mi numero', 7543179605, 'Puedo escribir otro string', true];
console.log(arrayExample);
