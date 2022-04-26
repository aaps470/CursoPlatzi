/*Cosa interesante:
protected es basicamente un privado pero que permite la herencia, si pongo private en vez de protected no puedo usarlo en ninguna clase que herede de ella. Tiene las mismas funciones.*/

export class Animal {
  constructor (
    protected name: string
  ) {}

  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello, i am ${this.name}`;
  }

  protected doSomething() {
    console.log('doooo')
  }
}

export class Dog extends Animal {

  constructor (
    name: string,
    public owner: string
    ){
    super(name);
  }

  /*Aqui llame a doSomething que es protected, pero como es protected y no private se puede heredar y usar sin problemas dentro de las clases. */
  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log(`woof ${this.name}`);
    }
    this.doSomething();
  }

  /* Aqui pasa algo tambien interesante, yo puedo crear el metodo move (que ya esta creado en la clase que hereda de Animal) y puedo generar algunas cosas especificas pero por supuesto tambien puedo heredar el metodo de Animal usando super. */
  move() {
    super.move();
    console.log('moving as a dog');
  }
  /*Depaso hice la prueba y si pongo super.move de primero hara lo que tenga que hacer y luego hara lo que tengo aqui en local y si lo pongo al contrario entonces hara lo que tenga que hacer en local y luego hara lo del super. */
}

//------------------- Animal en general ---------------------------------

const fifi = new Animal('fifi');
fifi.move();
console.log(fifi.greeting());

//-----------------------------------------------------------------------

// ----------------- Dog con extension a Animal---------------------------
const cheis = new Dog('cheis', 'Andres');
cheis.move();
console.log(cheis.greeting());
console.log(cheis.owner)
//cheis.name = 'otro nombre'//Error, ahora name is protected no se puede modificar
cheis.woof(1);
//cheis.doSomething() //Error, este metodo es protected, no se puede acceder desde afuera de las clases.
cheis.move();
//-------------------------------------------------------------------------
