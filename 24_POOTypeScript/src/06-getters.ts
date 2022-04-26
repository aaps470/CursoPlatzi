/*Getters y Setters se utilizan cuando trabajas con varibales de acceso privado */
/*Primero que nada como vamos a trabajar con privados una buena practica es poner un underscore (_) en la variable privada como en este casi day */



export class MyDate {


  constructor(
    public year: number = 1997,
    public month: number = 7,
    private _day: number = 9
  ) {}

  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number) {
   if(value < 10) {
     return `0${value}`;
   }
   return `${value}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  /*Get es un metodo para acceder al valor de la variable privada pero dado que es un motodo podemos generar codigo para acceder a ella, como una condicional, OJO: te permite acceder mas no modificar. */

  get day() {
    //code
   return this._day
  }

  /*Algo muy interesante, puedes generar get sin necesidad de general una varible private, es mas ni siquiera necesitas generar una variable, los get covierte metodos en propiedades, no necesita ejecutarse de manera explicita. */
  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }
}

const myDate = new MyDate (1993, 7, 10);
console.log(myDate.printFormat());
//myDate.day = 2333; //Error, no se puede modicicar porque es privada
console.log(myDate.day);
console.log('1993 ',myDate.isLeapYear);

const myDate2 = new MyDate (2000, 7, 10);
console.log('2000', myDate2.isLeapYear);

const myDate3 = new MyDate (2001, 7, 10);
console.log('2001 ', myDate3.isLeapYear);

const myDate4 = new MyDate (2004, 7, 10);
console.log('2004 ', myDate4.isLeapYear);

