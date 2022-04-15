/*Otra forma de ver al tipo de dato never es como aquellas funciones que nunca llegan a ejecutarse por completo */

const withoutEnd = () => {
  while(true) {
    console.log('nunca para de aprender');
  }
}


const fail = (massage: string) => {
  throw new Error(massage);
}

const example = (input: unknown) => {
  if (typeof input === "string") {
    return 'es un string';
  } else if (Array.isArray(input)){
    return 'es un array';
  }
  return fail('not match');
}

console.log(example('Hola'));
console.log(example([1,2,1,1]));
console.log(example(1234)); //Se detiene
console.log(example('hola despues del fail'));

