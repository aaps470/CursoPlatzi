/* TS es inteligente y podemos ahorrarnos unas lineas de codigo cuando vayamos a dlecarar las variables en el constructor*/

/*Como seria: bueno primero quitamos la declaracon del principio y dentro del constructor declaramos si la variable es publica o privada y que tipo de variable es, tambien podemos dejarle valores por defecto*/

/*En el constructor debes colocar de forma explicita el tipo de acceso si es público o privado. */

export class MyDate {


   constructor(
     public year: number = 1997,
     public month: number = 7,
     private day: number = 9
   ) {}

   printFormat(): string {
     const day = this.addPadding(this.day);
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
       this.day += amount;
     }
     if (type === 'months') {
       this.month += amount;
     }
     if (type === 'years') {
       this.year += amount;
     }
   }

   //Esto es simplemente un metodo para acceder al day, pero sin modificarlo
   getDay() {
    return this.day
   }
 }

 const myDate = new MyDate (1993, 7, 10);
 console.log(myDate.printFormat());
 console.log(myDate.getDay());

 const myDate2 = new MyDate ();
 console.log('() =>' ,myDate2.printFormat());

 const myDate3 = new MyDate (2022);
 console.log('(2022) => ',myDate3.printFormat());

 const myDate4 = new MyDate (2022, 3);
 console.log('(2022, 3) => ',myDate4.printFormat());

