(() => {
  const login = (data: {email: string, password: string}) => {
    console.log(data.email,data.password);
  }

  login({
    password: 'holis123',
    email: 'andres@andres.com',
  })

  //Lo que tiene los objetos de especial es que no tengo que seguir un orden estricto de declaracion, es decir, pude comenzar con email y luego con password pero a la hora de poner datos no necesito seguir ese orden, solo declararlos y ya.

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];

  const addProduct = (data: {
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data);
  }

  addProduct({
    title: 'Algo aqui',
    stock: 100,
    createAt: new Date(1994, 3, 5)
    //size no es necesario porque esta marcada como opcional
  });

  addProduct({
    title: 'Algo aqui revenge',
    stock: 101,
    createAt: new Date(1994, 3, 5),
    size: 'M'
  });
  console.log(products);
})();

