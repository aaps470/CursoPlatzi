"use strict";
console.log('Hola TypeScript con Platzi world');
/* #Tipado en TypeScript:

Explicito: Define una sintaxis para la creación de variables con tipo de dato.

nomVariable : Tipo de dato

Inferido: TypeScript tiene la habilidad de deducir el tipo en funcion de un valor.


#Tipo de datos primitivos:

Number > Boolean > String > Array
Tuple > Enum > Any > Void
Null > Undefined > Never > Object*/
//---------------------- Primera Clase: Numbers, Boolean, String-----------
// Number
// Explicit
let phone;
phone = 1;
phone = 5423567;
// phone = 'hola'; //Error porque phone ya esta definido como number, es decir, que no puede recibir strings, solo numeros.
//Inferido
let phoneNumber = 54234567;
//phoneNumber = true; //Error porque como es Inferido toma el primer valor dado como su tipo de dato, en este caso a PhoneNumber se le dio un valor numerico, es decir, que ya no puede ser otra cosa que no sea eso.
let hex = 0xf00d; //Valor Hexadecimal
let binary = 0b1010; //Valor Binario
let octal = 0o744; //Valor Octal
//Tipo: Boolean
let isPro;
isPro = true;
//isPro = 1; //Error porque isPro ya es boolean no number
//Inferido
let isUserPro = false;
isUserPro = true;
//isUserPro = 1; //Error
//Tipo: String
let username = 'Anktor';
username = 'aaps470';
//username = true; //Error por el tipo de dato String
//Template String
//Uso de back-tick ----> `
let userInfo;
userInfo = `
    User Info:
    username: ${username}
    firstName: ${username + ' Andres'}
    phone: ${phone}
    isPro: ${isPro}
`;
console.log('userInfo', userInfo);
