//Reduce(), efectivamente hace eso, solo reduce a un valor y no devuelve otro array, simplmente un valor.

//Se utiliza mucho para hacer calculos a partir de la informacion de un array.

const totals = [1,2,3,4];


//Con for quiero sumar todos los elementos internos de totals

let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum = sum + element;   
}

console.log('La suma', sum);


//vs

//Con reduce() voy a hacer lo mismo de sumar todos los elementos.


const rta = totals.reduce((sum, item) => sum + item, 0);
// primer argumento de la f() es el acumulador, en este caso sum (puedes ponerle cualquier nombre).
// segundo argumento de la f() es el elemento, en este caso item.
// segundo parámetro de la f() es el estado inicial del acumulador, que es 0.
console.log('aplicando reduce', rta);