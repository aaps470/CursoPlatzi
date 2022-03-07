//El metodo find() devuelce el PRIMER elemento del array que cumpla con la condicion dada o nos devuelve undefined si es que no encuentra ningun elemento que cumpla con los requisitos pedidos.

//En cambio el metodo findIndex() es una variante que te devuelce el index o pasicion donde esta ese primer elemento que encuentra con las caracteristicas de la condicion dada. De no encontrar ninguno devuelve -1 como respuesta del return del metodo.


//aplicando for para encontrar el numero 30

const numbers = [1 ,30 , 49, 29, 10, 13];

let rta = undefined;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element === 30){
        rta = element;
        break;
    }
    
}

console.log('utilizando for', rta);

//vs

//aplicando find()

const rta2 = numbers.find(item => item === 30);
console.log('utilizando find', rta2);



//Ahora aplicare con un array de objetos para buscar el id de hamburguesa

const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

const rta3 = products.find(item => item.id === '🍔');
console.log('Encontrando una hamburguesa', rta3);

//con findIndex encontrare es la posicion de lo que busco en el array

const rta4 = products.findIndex(item => item.id === '🍔');
console.log('hamburguesa esta en la posicion', rta4);