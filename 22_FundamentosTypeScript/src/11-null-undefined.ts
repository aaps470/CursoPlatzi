/*Null and Undefined */

(() => {
  //let myNumer: number;
  //let myString: string;

  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 12;

  let myString: string | undefined = undefined;
  myString = 'asd';

  function hi(name: string | null) {
    let hello = 'Hola ';
    if(name) {
      hello += name;
    } else {
      hello += 'nobody';
    }

    console.log(hello);
  }

  function hiVerson2(name: string | null) {

    //Una forma mas simplificada de hacer if else sin usar if else
    let hello = 'Hola ';
    hello += name?.toLowerCase() || 'nobody';
    console.log(hello);

    /*Explicacion de que paso: se puede ver un ? al lado de name, eso es que
    esta preguntado si name es string o null, y como lo verficica, bueno el
    toLowerCase solo funciona si es un string, si es null no lo aplica y va a
    aplicar el || que es un string concatenado de nobody */

  }


  hi('Andres');
  hi(null);

  hiVerson2('Andres');
  hiVerson2(null);
})();
