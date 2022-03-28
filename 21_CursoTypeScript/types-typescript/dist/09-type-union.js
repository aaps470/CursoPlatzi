"use strict";
//Union de tipos
Object.defineProperty(exports, "__esModule", { value: true });
let idUser;
idUser = 10;
idUser = '10';
//Buscar username dado un ID
const getUsernameById = (id) => {
    //Logica de negocio, find the user
    return 'anktor';
};
getUsernameById(20);
getUsernameById('20');
let idUser2;
idUser2 = 20;
idUser2 = '20';
//Buscar username dado un ID
function getUsernameById2(id) {
    //Logica de negocio, find the user
    return 'Andres';
}
getUsernameById2(20);
getUsernameById2('20');
//let smallPicture: SquareSize = '200x200' //Error
let smallPicture = '100x100';
let mediumPicture = '500x500';
