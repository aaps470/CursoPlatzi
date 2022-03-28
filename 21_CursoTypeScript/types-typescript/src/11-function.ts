/*Funciones en TS:

Los parametros en las funciones son tipados
Se pueden definir parametros opcionales
El tipo de retorno puede ser un tipo basico, enum, alias, tipo literal o una combinacion de ellos.
*/

//Tipo JS
//Crear una fotografia

//function createPicture(title, date, size){
    //title
//}

type SquareSize = '100x100' | '500x500' | '1000x1000'

function createPicture(title: string, date: string, size: SquareSize) {
    //Se crea la fotografia
    console.log('createPicture usung ', title, date, size);
}

createPicture('My birthday', '2022-05-03', '500x500');
//createPicture('Colombia Trip', '2022-03'); //Error

//Parametros opcionales

function createPicture2(title?: string, date?: string, size?: SquareSize){
    //Se crea la fotografia
    console.log('create Picture using ', title, date, size);
}

//Al poner el '?' despues del tipo de dato le dice al compilador que 'Puede que reciba un dato'

createPicture2('My birthday', '2022-05-03', '500x500');
createPicture2('Colombia Trip', '2022-03');
createPicture2('Colombia Trip');
createPicture2();

//Array Function

const createPic = (title: string, date: string, size: SquareSize): object => {
   // return {
   //     title: title,
   //     date: date,
   //     size: size
   // };

    return {
        title,
        date,
        size
    }

};

const picture = createPic('Platzi session', '2022-03', '100x100');
console.log('Picture ', picture);


//Tipo de retorno con TS

function handleError(code: number, massage: string): never | string {
    //Procesamiento del codigo, mensaje
    if(massage === 'error') {
        throw new Error (`${massage}. Code error: ${code}`);
    } else {
        return 'An error has occurred';
    }
}



try {
    let result = handleError(200, 'OK'); //string
    console.log('Result ', result);
    let result2 = handleError(404, 'error'); //never
    console.log('Result 2 ', result2);
} catch (error) {
    
}