"use strict";
//------------Segunda Clase: Any --------------------------------------
// Tipo explicito
let idUser;
idUser = 1; //number
idUser = '1'; //String
console.log('idUser', idUser);
//Tipo Inferido
let otherId;
otherId = 1;
otherId = '1';
console.log('otherId', otherId);
let surprise = 'hello typescript';
// surprise.sayHello(); Error
const res = surprise.substring(6); //Error
console.log('res', res);
//Recomendacion: any no es algo que se deba usar regularmente, se debe usar mas de ultimo recurso, porque puede generar futuros errores si la variable cambia en algun momento.
