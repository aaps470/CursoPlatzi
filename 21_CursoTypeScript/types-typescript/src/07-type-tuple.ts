//-------------- Septima Clase: tuple ---------------------

/*na tupla en TypeScript es un array de elementos que están tipados. De esta manera cada vez que haya que insertar un elemento se validará que dicho elemento coincida con el tipo de dato establecido en la tupla.*/

//[1, 'user'];
export{};

let user: [number, string];

user = [1, 'Anktor'];

console.log('user ', user);
console.log('username: ', user[1]);
console.log('id: ', user[0]);
console.log('username length: ', user[1].length);

//Tuplas con varios valores
// id, username, isPro

let userInfo: [number, string, boolean];
userInfo = [2, 'paparazzi', true];
console.log('userInfo: ', userInfo);


//Arregle de Tuplas

let array: [number, string][] = [];

array.push([1, 'Anktor']);
array.push([2, 'paparazzi']); //0
array.push([3, 'lensQueen']); //1
console.log('array', array); //2

//Uso de funciones Array
// lensQueen -> lensQueen001

array[2][1] = array[2][1].concat('001');
console.log ('array ', array);
