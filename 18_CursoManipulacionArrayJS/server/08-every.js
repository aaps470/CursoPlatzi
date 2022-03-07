// Every() Este metodo es el contrario a some() devuelce true o false si TODOS los elementso del array cumplen con la condicion


//con for para verificar que todos los numeros sean menores que 40

const numbers = [1, 20, 49, 29, 10, 13];

let rta = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(!(element < 40)){
        rta = false;
        break;
    }
}

console.log('rta', rta);

//vs

//every

const rta2 = numbers.every(item => item <= 40);

console.log('Todos los numeros son mayores de 40?', rta2);


//Reto: que en el siguiente array se verifique que todos tienen menos de 15 años

const team = [
    {
      name: "Nicolas",
      age: 18,
    },
    {
      name: "Andrea",
      age: 15,
    },
    {
      name: "Zulema",
      age: 22,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ];


//forma 1:
const reto = team
.map(item => item.age)
.every(item => item >= 18)

console.log('Todos son menores de 18 años?', reto);

//forma 2:
const reto2 = team.every(item => item.age >=18);

console.log('Forma 2: son mayores de edad?', reto2);

