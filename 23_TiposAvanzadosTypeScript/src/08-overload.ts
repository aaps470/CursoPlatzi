//Nico => [N,i,c,o] => string => string[]
//[N,i,c,o] => Nico => string[] => string

function parseStr(input: string | string[]): string | string[] {
  if(Array.isArray(input)) {
    return input.join(''); //string
  } else {
    return input.split('') //string[]
  }
}

const rtaArray = parseStr('Nico');
// rtaArray.reverse() //Error porque la funcion no sabe si es un array
if(Array.isArray(rtaArray)) {
  rtaArray.reverse();
}
console.log('rtaArray', 'Nico => ', rtaArray)

const rtaStr = parseStr(['N','i','c','o']);
//rtaStr.toLowerCase(); // Error porque la funcion no sabe si es un string
if(typeof rtaStr === "string") {
  const rta = rtaStr.toLowerCase();
  console.log('toLowerCase ', rta);
}
console.log('rtaStr', "['N','i','c','o'] => ", rtaStr);
