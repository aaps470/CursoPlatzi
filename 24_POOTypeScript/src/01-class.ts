/* Ya hemos trabajado con clases en el pasado, Date es un tipo de clase donde tiene sus propios metodos internos*/

const date = new Date();
const rta1 = date.getHours();
const rta2 = date.getTime();
const rta3 = date.toISOString();

const date2 = new Date(1993, 1, 12); // 0 enero, 11 dic
const rta4 = date2.getHours();
const rta5 = date2.getTime();
const rta6 = date2.toISOString();

console.log(
  "rta1:", rta1, "rta2:", rta2, "rta3:", rta3
)

console.log(
  "rta4:", rta4, "rta5:", rta5, "rta6:", rta6
)
//-------------------------------------------------------------------------

export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}


//instancia de la clase:
const myDate = new MyDate(2021, 3, 13);
console.log(myDate);
