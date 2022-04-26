/*Singleton lo que hace es que evita que se creen multiples instancias del mismo objeto */

export class MyService {

  constructor(private name: string) {}

  getName() {
    return this.name;
  }
}

const myService1 = new MyService('service 1')
console.log(myService1.getName());

const myService2 = new MyService('service 2')
console.log(myService2.getName());

//false
console.log(myService1 === myService2);

/*Separe la versiones para ver con mas detalles los cambios, primero, yo puedo crear mas de una instancia, aqui en este caso cree 2, y compare a ver si son diferentes, y si lo son, pero yo quiero que se cree solo una instancia y ya.*/


//------------------------- Version 2 aplicando Singleton -----------------

/*Cosas diferentes explicadas: */
export class MyServiceV2 {

  //Segundo: se creo una bandera, una forma para dar a una insttancia si puede ser del tipo MyService o null (es decir no existe)
  static instance: MyServiceV2 | null = null;

  // Primero: se puso private el constructor, ya con esto no puedo hacer ninguna instancia
  private constructor(private name: string) {}

  getName() {
    return this.name
  }

  //Tercero: aqui esta la chicha del singleton, creo un metodo create con el parametro name, dentro pregunto si ya existe una instancia, si no existe, es decir, es null, enctonces se crea una y ya, no puedo crear mas de una, si ya esta creada entonces lo que hace es retornarme la que ya tengo creada.
  static create(name: string) {
    if(MyServiceV2.instance === null) {
      console.log('deberia entrar una vez');
      MyServiceV2.instance = new MyServiceV2(name);
    }
    return MyServiceV2.instance
  }
}

/* Aqui hay 3 instancias creadas, pero la verdad es que todas son la misma, no puedo crear mas de una */

const myService4 =  MyServiceV2.create('service 4');
console.log(myService4.getName());

const myService5 = MyServiceV2.create('service 5')
console.log(myService5.getName());

const myService6 = MyServiceV2.create('service 6')
console.log(myService6.getName());

//true
console.log(myService1 === myService2);
