//El metodo concat() fusiona arrays. Es inmutable (no modifica el array original)

const elements = [1,1,2,2];
const othersElements = [3,3,4,4];

//Aplicando for para unir ambos arrays

const newArray = [...elements]; //Esto es para copiar la referencia en memoria, sino que asi genero una copia y no altero la original
for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArray.push(element);
    
}

console.log('aplicando for', newArray);

//vs

//aplicando concat()

const rta = elements.concat(othersElements);
console.log('aplicando concat', rta);