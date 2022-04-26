import { Dog } from './09-protected'

// function getValue (value: unknown) {
//   return value
// }

// function getValue (value: string | number) {
//   return value
// }

/* Un generico es un tipo de dato especial que yo creo y moldeo segun la necesidad */

//generic: <'nombre que querramos poner'>
function getValue<myType> (value: myType) {
  return value
}

//Puedo especificar que tipo de dato quisiera utilizar
getValue<number>(12).toFixed();
getValue<string>('12').toLowerCase();
getValue<number[]> ([11,2,1]).forEach;


/*Puedo generar mas de un tipo de dato generico */

function getValueV2<myType> (value: myType) {
  const array: myType[] = [value];
  return value;
}

getValueV2<number>(20).toFixed();
const fifi = new Dog('fifi', 'andres');
getValueV2<Dog>(fifi).greeting();
//Promise<boolean>


function getValueV3<myType, myType2> (value: myType | myType2) {
  return value;
}

const rta = getValueV3<number, string>('12');
console.log(rta);


