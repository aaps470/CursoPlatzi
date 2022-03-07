// MAP:

// Que hace el .map()? TRANSFORMAR

//.map() es INMUTABLE por lo tanto no modifica el array original, sino que crea uno nuevo con la "transformacion" aplicada.
//Ademas, mantienes el mismo Length que el array original, te devuelve en el nuevo array la misma cantidad que le aplicaste el metodo.

const letters = ['a', 'b', 'c'];

const newArray = [];
for (let index = 0; index < letters.length; index++) {
    const element = array[index];
    newArray.push(element + '++');    
}
console.log('original', letters);
console.log('new', newArray);


//vs


const newArray2 = letters.map(item => item + '++');
