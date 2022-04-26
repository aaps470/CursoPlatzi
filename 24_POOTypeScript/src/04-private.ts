/*El acceso privado a los atributos y métodos nos permite restringir la modificación no autorizada a los datos de la clase, y de esta manera tener más control sobre nuestra clase. */

export class MyDate {
  year: number;
  month: number;
  private day: number;

   constructor(year: number, month: number, day: number) {
     this.year = year;
     this.month = month;
     this.day = day;
   }

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
 }

 const myDate = new MyDate (1993, 7, 9)
 console.log(myDate.printFormat());

/*Aqui en esta clase no puedo modificar ni day ni addPadding porque tienen la palabra reservada private, si intento modificarlo, me da error.*/
