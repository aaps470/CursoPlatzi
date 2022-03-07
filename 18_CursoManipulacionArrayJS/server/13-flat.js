//La funcionalidad de Flat con recursión
//Se busca recursivamente en cada elemento hasta que ya no se encuentre otra lista y se van uniendo los elementos encontrados con Cat. 

const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

//aplicando for para poder generar un unico array

const newArray = []
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    }
    
}

console.log('aplicando for', newArray);

//vs 

//Aplicando flat()

const rta = matriz.flat();
console.log('flat', rta);

//Algo que hay que tener en cuenta es que TU le dices cuantos niveles hay que aplanar, por ejemplo, sin poner nada dentro del array lo pone como nivel 1


//Ahora hare una matriz de 3 niveles y veremos como funciona flat

const matriz2 = [
    [1,2,3],
    [4,5,6, [10,11, [12,13]]],
    [7,8,9]
];

const rta2 = matriz2.flat();
const rta3 = matriz2.flat(2);
const rta4 = matriz2.flat(3);

console.log('flat nivel 1', rta2);
console.log('flat nivel 2', rta3);
console.log('flat nivel 3', rta4);

