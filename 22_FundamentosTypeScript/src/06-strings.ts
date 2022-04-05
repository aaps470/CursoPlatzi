/*Strings: trabajando con texto */

(() => {
  let productTitle = 'My amazing product';
  /* Error toditos, porque ya el elemento tiene como tipo de dato string*/
  //productTitle = null;
  //productTitle = 123;
  //productTitle = () => {};;

  productTitle = 'My amazing product changed';
  console.log('product Title ', productTitle);

  //Se puede usar sin problemas comillas dobles o simples
  const productDescription = "bla bla bla bla";
  console.log('productDescription', productDescription);

  //backtip
  //Voy a traerme unos valores radom para usar dentro de los backtips

  let productPrice = 100;
  let isNew = false;
  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice};
    isNew: ${isNew};
  `;

  console.log(summary);
})();
