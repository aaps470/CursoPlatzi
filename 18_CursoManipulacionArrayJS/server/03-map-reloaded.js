//Tenemos un arreglo de objetos y con la función map vamos a obtener un solo atributo de todos los objetos.

const orders = [
    {
        customerName: 'Nicolas',
        total: 60,
        delivered: true,
    },

    {
        customerName: 'Zulema',
        total: 120,
        delivered: false,
    },

    {
        customerName: 'Santiago',
        total: 180,
        delivered: true,
    },

    {
        customerName: 'Valentina',
        total: 240,
        delivered: true,
    }
];

//Tomo solamente el atributo total, como si fuera array de totales

const rta = orders.map(item => item.total);

//Muestro el array completo
console.log('Array completo: ' , orders);
console.log('Obteniendo un atributo con maps: ', rta);


//Ahora quiero agregar un nuevo atriburo al objeto sin modificar el array original

//Agrego el atributo tax a cada objeto del array

const rta2 = orders.map(item => {

    //generamos un nuevo objeto para evitar modificar el original
    return {
        ...item, //clonamos los atributos SIN la referencia a memoria
        tax: .19
    };
});

console.log('agregando atrituto tax: ', rta2);
console.log('array completo: ', orders);