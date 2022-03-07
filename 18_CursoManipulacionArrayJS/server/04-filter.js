//Filter() lo que hace es filtrar el array original en base a una condicion, los que la cumplan estaran en el nuevo array creado. Por lo tanto filter() es inmutable y el nuevo array creado solamente puede contener:

//Cero coincidencias, algunas coincidencias o todas las coincidencias pero no mas que el original.

const words = ['spray', 'limit', 'elite', 'exubertant'];

//con for para buscar palabras con mas de 6 letras

const newArray = [];
for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if (item.length >= 6) {
        newArray.push(item);
    }
};
console.log('newArray', newArray);
console.log('Array Origianl', words);


// vs

//con filter() para buscar palabras con mas de 6 letras

const rta = words.filter(item => item.length >= 6)

console.log('rta', rta);
console.log('Array Original', words);


//Ahora un ejemplo mas grande, quiero filtrar y mostrar cuales tienen delivered: true

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
    },

    {
        customerName: 'Nicol',
        total: 2300,
        delivered: false,
    },
];

const rta2 = orders.filter(item => item.delivered) //OJO delivered tiene como respuesta un booleno, es decir, true o false, el condicional siempre tomara a true a menos que nosotros digamos lo contrario

console.log('rta2', rta2);
console.log('Orders', orders);


//Ahora quiero hacer que esten delivereed: true y que el total sea mayor de 100.

const rta3 = orders.filter(item => item.delivered && item.total >= 100);

console.log('rta3', rta3);
console.log('Orders', orders);


//Ahora voy a hacer un buscador, filtraremos por los nombres por lo que ahora usaremos query

//Que es query? basicamente se usa en los buscadores cuando se quieren escribir strings, como en este caso que queremos bucar por Nico especificamente

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}

console.log('El Search de Nico', search('Nico'));