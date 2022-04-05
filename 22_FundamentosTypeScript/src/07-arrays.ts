/*Arrays: trabajando con listas */

(()=> {
  let prices = [1,2,2,1,1,212];

  /*Errores porque ya price fue definido como una cadena de numeros, no puede entrar otro tipo de valor */
  //prices.push('asa');
  //prices.push(true);
  //prices.push({});
  prices.push(121212);
  prices = [1,2,2,2];

  let products = ['hola', true]
  /*Los arrays pueden aceptar mas de un tipo de dato siempre y cuando se declare
  desde el principio, en este caso products puede aceptar string o booleans*/

  //product.push(12); //error porque no puede  aceptar numeros, solo string o booleans

  let mixed:(number | string | boolean)[] = ['hola', true];
  mixed.push(12);
  mixed.push('asasas');
  mixed.push(false);

  let numbers = [1,2,2,2,1,121];
  numbers.map (item => item * 2);
})();
