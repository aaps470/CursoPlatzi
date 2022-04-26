export class Animal {
  constructor (
    public name: string
  ) {}

  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello, i am ${this.name}`;
  }
}

/* La herencia se utiliza para (Valga la redundancia) heredar atributos y metodos de la clase a la cual quieras extender*/

/*Se hace utilizando la palabra clave extends */

export class Dog extends Animal {

  /* Aqui ocurre algo muy intesante y ES SUPER IMPORTANTE DE CAPTAR:

  Al trabajar con herencias hay que tener algo en cuenta, estas heredando los atributos y los metodos alli todo bien, pero que pasa cuando quiero tener atributos propios aqui en la clase Dog?

  Bueno, Quiero agregar owner como atributo de Dog y eso tengo que hacerlo en un constructor, como hemos aprendido anteriormente puedes crearlo dentro del constructor poniendo su tipo de acceso y su tipo de dato.

  Pero tambien hay que tener en cuenta que estamos heredando name desde Animal, por lo que solo tenemos que pasarlo, no volver a definirlo, por eso no tenemos que ponerle el tipo de acceso y pasarlo como super */

  constructor (
    name: string,
    public owner: string
    ){
    super(name);
  }

  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log('woof');
    }
  }
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
cheis.woof(5);
console.log(cheis.owner)
//-------------------------------------------------------------------------
