/*Tipo de dato number*/

(() => {
  let productPrice = 100;
  productPrice = 12;
  console.log('profuctPrice ',productPrice);

  let customerAge: number = 28;
  //customerAge = customerAge + '1'; //forma erronea
  customerAge = customerAge + 1;
  console.log ('customer Age ', customerAge);

  let productInStock: number;
  //console.log('profuct In Stock ', productInStock); //Error  porque no tiene un valor asignado

  //if (productInStock > 10) {   //Error por lo mismo, productInStock no tiene valor
  //  console.log('is  greater');
  //}

  let discount = parseInt('123'); //parseInt convierte string en number o undefined
  console.log('discount ', discount);
  if (discount < 200) {
    console.log('apply the discount');
  } else {
    console.log('do not apply the discount');
  }

  //Numeros mas especificos, como los hexadecimales

  let hex = 0xfff;
  console.log('hexadecimal', hex);

  //Binario

  let bin = 0b1010;
  console.log('binario', bin);
})();
