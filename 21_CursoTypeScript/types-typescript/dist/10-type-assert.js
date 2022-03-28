"use strict";
/*Aserciones de Tipo:

Cuando el programador puede conocer mas que TS sobre el valor de una variable

Es un mensaje al compilador: "Confia en mi, se lo que hago"

Se parece al casting de tipos en otros lenguajes de programacion

Usa dos sintaxis: <Angle Bracket> y (variable as tipo)*/
Object.defineProperty(exports, "__esModule", { value: true });
let username;
username = 'anktor';
//tenemos una cadena, TS confia en mi!
let massage = username.length > 5 ?
    `Welcome ${username}` :
    'Username is too short';
console.log('massage', massage);
let usernameWithId = 'luixaviles 1';
//Como obtener el username?
username = usernameWithId.substring(0, 10);
console.log('Username only ', username);
//Sintaxis "as"
massage = username.length > 5 ?
    `Welcome ${username}` :
    'Username is too short';
let helloUser;
helloUser = 'Hello paparazzi';
username = helloUser.substring(6);
console.log('username ', username);
