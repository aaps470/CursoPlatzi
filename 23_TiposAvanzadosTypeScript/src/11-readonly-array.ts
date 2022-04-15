/*Este tipo de dato es un array, pero la principal diferencia con los arrays “normales” es que no existen ninguno de los métodos de mutación, tales como pop, push, shift, etc. */

const numbers: ReadonlyArray<number> = [1,2,3,4,5];
//numbers.push(1);
//numbers.pop();
//numbers.unshift(1);
numbers.filter(() => {})
numbers.reduce(() => 0)
numbers.map(() => 0);


