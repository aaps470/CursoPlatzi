//Some: es un metodo que nos devuelve true o false si al menos 1 elemento de nuestro array cumple con la condicional.

const numbers = [1,2,3,4];

//con for vamos a indentificar cual de los numeros es par, basta con encontrar 1 solo

let algo = false;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element % 2 === 0){
        algo = true;
        break;  //El break es para que rompa la iteracion cuando encuentre un par
    }
    
}
console.log('respuesta con for', algo);


//vs

//some
const rta = numbers.some(item => item % 2 === 0);

console.log('respuesta con some', rta);


//Ahora buscaremos en orders si al menos una orden fue entregada

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

const rta2 = orders.some(item => item.delivered);

console.log('Al menos una orden fue entregada?', rta2);


//Ahora algo mas grade, tengo un schedule con varias citas, lo que se evaluara es que las citas se pueden agendar sin cruzarse con las que ya estan.

const dates = [
    {
      startDate: new Date(2021, 1, 1, 10), //primero de enero 2021, 10am
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),  //primero de enero 2021, 3pm
      endDate: new Date(2021, 1, 1, 15, 30), //primero de enero 2021, 3:30pm
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];

  const newAppointment = {
    startDate: new Date (2021,1,1,19),
    endDate: new Date (2021,1,1,20,30),
};

const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

const isOverlap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate},
            {start: newDate.startDate, end: newDate.endDate},
            )
    })
}

console.log(isOverlap(newAppointment));