//Hablemos De ES10

//Hacemos un Array

let array = [1,2,3,[1,2,3,[1,2,3]]];
console.log(array.flat(2));

//flat() crea una nueva matriz con todos los elementos de sub-array concatenados recursivamente hasta la profundidad especificada

let array2 = [1,2,3,4,5]

console.log(array2.flatMap(value => [value, value*2]));




let hello = '                     Hello World';

console.log(hello)
console.log(hello.trimStart());

//funcion TRIMSTART() me permite eliminar el espacio en blanco

let hello2 = 'Hello World                '
console.log(hello2)
console.log(hello2.trimEnd())

//Funciona igual que el anterior pero con espacios al final



// try/catch: ahora puedes utilizarlo sin necesidad de especificar como catch(error) sino directamente usarlo en el scope del catch.

try {

} catch {
    error
}



//Object.fromEntries() lo inverso a Object.entries(), es decir podemos convertir un objeto en una matriz clave/valor con Object.entries()
let entries = [["name", "oscar"],["age", 32]];

console.log(Object.fromEntries(entries));




//Symbol.prototype.description: permite regresar el descripcion opcional del Symbol
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);
