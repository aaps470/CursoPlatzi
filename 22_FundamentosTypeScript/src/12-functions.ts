 (() => {

  type Sizes = 'S' | 'M' | 'L' | 'XL';

    function createProductToJson(
        title: string,
        createAt: Date,
        stock: number,
        size: Sizes
    ) {
      return {
        title,
        createAt,
        stock,
        size
      }
    }

    //TS es muy estricto, tienes que pasarle todos los parametros que la funcion pide y en el tipo de dato que esta explicito, en este caso, un string, un date, un number y un alias

    const producto1 = createProductToJson('P1', new Date(), 12, "XL");
    console.log(producto1);
    console.log(producto1.title);
    console.log(producto1.stock);


    //Aplicando Arrow Functions

    const createProductToJsonV2 = (
      title: string,
      createAt: Date,
      stock: number,
      size?: Sizes
  ) => {
    return {
      title,
      createAt,
      stock,
      size
    }
  }

  //Aqui vemos algo interesante, se puede notar que en la version 2 en el tipo de dato size esta marcada como opcional (?) es decir, que no tengo que enviarla como parametro obligatorio en producto2

  const producto2 = createProductToJsonV2('P1', new Date(), 12 /*, 'S' */);
    console.log(producto2);
    console.log(producto2.title);
    console.log(producto2.stock);
 })();
