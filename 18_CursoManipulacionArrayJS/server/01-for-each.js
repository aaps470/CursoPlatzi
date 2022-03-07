//ForEach es un metodo para llamar a cada elemento dentro de un array.

//EJEMPLO BASICO

const letters = ['a', 'b', 'c'];

letters.forEach(element => console.log('forEach', element));

//vs

for(let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log('for', element);
}

//Ambas van a hacer exactamente lo mismo solo que con forEach solo se necesita una linea de codigo