/*Union Types: flexibilidad en TS */

(() => {
  /*Los union types son especialmente útiles cuando quieres definir tu propio tipo de dato, en ese caso acotas tu variable al tipo de dato personalizado y con union determinas qué valores quieres que tenga, tu variable no recibirá valores diferentes a lo que tú definas.

  Especialmente útil en catálogos. */

  let userId: string | number;
  userId = 1212;
  userId = 'hola';

  /* el typeof lo que hace es que pregunta al elemento de cual tipo de dato es*/

  const greeting = (myText: string | number) => {
    if(typeof myText === 'string') {
      console.log(`string ${myText.toLowerCase()}`);
    }else {
      console.log(`number ${myText.toFixed(1)}`);
    }
  }

  greeting('AnDrEs');
  greeting(12.121212);

})();
