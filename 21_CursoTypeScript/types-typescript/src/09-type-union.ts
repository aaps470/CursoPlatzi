//Union de tipos

/*En TS se puede definir una variable con multiples tipos de datos: Union Type

Se usa el simbolo de pipe ('|') entre los tipos */ 
export {};

let idUser: number | string;

idUser = 10;
idUser = '10';

//Buscar username dado un ID

const getUsernameById = (id: number | string) => {
    //Logica de negocio, find the user
    return 'anktor';
}

getUsernameById(20);
getUsernameById('20');

//Alias de tipos en TS


//Con type declaro un alias para los diferentes tipos de datos
type IdUser = number | string;
type Username = string;
let idUser2: IdUser;

idUser2 = 20;
idUser2 = '20';

//Buscar username dado un ID

function getUsernameById2(id: IdUser): Username {
    //Logica de negocio, find the user
    return 'Andres';
}

getUsernameById2(20);
getUsernameById2('20');


/*Tipos Literales:

Una variable con un tipo literal puede contener unicamente una cadena del conjunto

se usan cadenas como "tipos", combinados con el simbolo de pipe entre ellos*/

type SquareSize = '100x100' | '500x500' | '1000x1000';

//let smallPicture: SquareSize = '200x200' //Error

let smallPicture: SquareSize = '100x100';
let mediumPicture: SquareSize = '500x500';