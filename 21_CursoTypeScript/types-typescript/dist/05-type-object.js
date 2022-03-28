"use strict";
//-----------------------Quinta Clase: Object ----------------------
//Tipo: object
/*Object vs object

Object: instancia de la clase Object de JavaScript
object: tipo de valores no primitivos

Con este tipo no se puede acceder a las propiedades de objeto*/
let user;
user = {}; //object
user = {
    id: 1,
    username: 'paparazzi',
    firstName: 'Pablo',
    isPro: true
};
console.log('user', user);
//console.log('user.username', user.username); //Error
//Object vs object (Clase JS vs tipo TS)
const myObj = {
    id: 1,
    username: 'paparazzi',
    firstName: 'Pablo',
    isPro: true
};
const isInstance = myObj instanceof Object; //Clase Object de JavaScript
console.log('isInstance', isInstance);
console.log('user.username', myObj.username);
