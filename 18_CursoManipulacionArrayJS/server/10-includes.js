//El metodo includes() determina si un array incluye determinado elemento, devuelve true o false segun corresponda.

const pets = ['cat', 'dog', 'bat'];


//Aplicando con for para encontrar dogs

let includeInArray= false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if(element === 'dog'){
        includeInArray = true;
        break;
    }
}

console.log('Hay un perro?', includeInArray);

//vs

//Aplicando include() para encontrar perro.
//OJO DATO CURIOSO: no necesitas un arrow function para buscar lo que buscas usando includes()

const rta = pets.includes('dog');
console.log('Hay un perro?', rta);