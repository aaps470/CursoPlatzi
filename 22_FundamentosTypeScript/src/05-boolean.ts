/*Booleanos trabajando con true y false*/

(() => {
  let isEnable = true;
  //isEnable = 'as'; //error
  //isEnable = 123 //Error
  isEnable = false;

  let isNew: boolean = false;
  console.log('isNew', isNew);
  isNew = true;
  console.log('isNew', isNew);

  const random = Math.random(); //Match.random te saca un numero entre 0 y 1
  console.log('random', random);
  isNew =  random >= 0.5 ? true : false;
  console.log('is New', isNew);


})();
