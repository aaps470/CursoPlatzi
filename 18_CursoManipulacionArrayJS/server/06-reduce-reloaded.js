//El objetivo es lograr conseguir que me marque cuantas veces se repite los numeros dentro del array, este caso 1 : 1, 3 : 2 y 2 : 1, es igual a la cantidad de veces que se repiten.

const items = [1, 3, 2, 3, 3, 1, 10];

const rta = items.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj [item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log('rta', rta);

//Es dificil de captar viendo asi el codigo pero basicamente es:

//Recuerda que mi inicializador es un objeto vacio {} por lo que:

//Primera iteracion pregunta, oye {} ¿tienes el item = 1? como NO lo tiene entonces le agrega 1 : 1,

//Segunda iteracion: oye {1:1} ¿tienes el item = 3? como NO lo tiene entonces agrega 3 : 1,

//Tercera iteracion: oye {1:1, 3:1} ¿tienes el item = 2? como NO lo tiene entonces agrega 2 : 1;

//Cuarta iteracion: oye {1:1, 3:1, 2:1} ¿tienes el item = 3? como SI lo tiene entonces suma y pone a 3 : 2

//Quinta iteracion: oye {1:1, 3:2, 2:1} ¿tienes el item = 3? como SI lo tiene entonces suma y pone a 3 : 3

//Y asi sucesivamente hasta que no haya mas elementos.


//Ahora un ejemplo mas complejo: quiero preguntar cuantos hay en level low, medium y high

const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "hight",
    },
    {
        name: "Andres",
        level: "hight",
      },
  ];

const rta1 = data.map(item => item.level)

console.log('rta1', rta1);

const rta2 = data
.map(item => item.level)
.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj [item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log('rta2', rta2);

