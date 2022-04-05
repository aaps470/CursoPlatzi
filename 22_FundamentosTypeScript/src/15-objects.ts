(() => {
  //Copy and Pages de la clase pasada con sus respectivas modificaciones

  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  };

  //Que hay aqui de nuevo, bueno ahora creamos un type de tipo object que tiene sus parametros y sus tipos de datos internos, ahora cuando creemos arrays o funciones podemos usar el type creado y el tipado seguira las reglas establecidas.

  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  }

  addProduct({
    title: 'Producto 1',
    stock: 100,
    createAt: new Date(1994, 3, 5)
    //size no es necesario porque esta marcada como opcional
  });

  addProduct({
    title: 'Producto 2',
    stock: 101,
    createAt: new Date(1994, 3, 5),
    size: 'M'
  });


  products.push({
    title: 'Producto 3',
    createAt: new Date(1992, 1, 1),
    stock: 12,
    size: "XL"
  })

  console.log('Array de productor ', products);

})();
