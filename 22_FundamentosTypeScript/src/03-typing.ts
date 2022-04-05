/*Tipos Inferidos: */

(() => {
  let myProdcutName = 'Product 1'; //TS infiere que es un string
  let myProdcutPrice = 123; //TS infiere que esto es un number

  //myProdcutName = 123 //Error, porque este elemento es un string no un number
  myProdcutName = 'change'; //Se cambia el valor, porque es let

  const myProdcutStock = 1000;
  //myProdcutStock = 200 // Error, porque es const, las const no pueden variar el valor


  //Tipo Directo

  let myNumberProduct: number = 10;
})();


/*Dato curioso, nuestro ejemplo esta dentro de un arrow function y esto lo hacemos
para que podamos usar los mismos datos aqui o en otro archivo sin que haya un error
de que se usa el mismo elmento aqui o en otro archivo*/

//SE llama funcion anonima auto-ejecutada




