//Hablemos de ECMAScrpit 8

const data = {
    frontend: 'Jeff',
    backend: 'Aleja',
    design: 'Yei',
}

console.log (data); //Cuando imprimo data es tipo object

//En ES8 se introdujo una forma de transformar objetos en arrays

const entries = Object.entries(data);

console.log(entries); //Cuando imprimo ahora es tipo Array

//Object.entries() nos permite hacer esto, tener en cuenta que su argumento debe ser el nombre del objeto que nos interesa transformar en matriz.

console.log(entries.length);

//al añadir el metodo .length a entries, nos permite saber el numero de elementos en el objeto.





const data2 = {
    frontend: 'Andres',
    backend: 'Christian',
    design: 'Miriam',
}

const values = Object.values(data2);
console.log(values);
console.log(values.length);

//El metodo VALUES nos permite ignorar las llaves y saber solamente el valir de las keys del objeto.






//En esta version tambien se añadio el padding

const string = 'hello';
console.log(string.padStart(7, 'hi'))

//con .padStart puedes añadir mas letras a un string, el primer argumento corresponde al maximo de caracteres, mientras que el segundo corresponde a las letras a agregar.

console.log(string.padEnd(12,'____'));
console.log('food'.padEnd(12,'______'));