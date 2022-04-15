type Sizes = 'S' | 'M' | 'L' | 'XL';

//type Product = {
//  id: string | number;
//  title: string;
//  createAt: Date;
//  stock: number;
//  size?: Sizes;
//}

/*Las interfaces funcionan muy similar a como lo hace type, pero en las interfaces solo aplica para los objetos */
interface Product {
  id: string | number;
  title: string;
  createAt: Date;
  stock: number;
  size?: Sizes;
}

const products: Product[] = [];

products.push({
  id: '1',
  title: 'p1',
  createAt: new Date(),
  stock: 90,
});

const addProduct = (data: Product) => {
  products.push(data);
}

//Ejemplo mio ------------------------------------------------------------

const rta = addProduct({
  id: 12,
  title: 'p2',
  stock: 200,
  createAt: new Date,
  size: 'S'
})

console.log(products);
console.log(rta);

//-------------------------------------------------------------------------

/*¿Entonces, porque usar interfaces si puedo usar type?
La razón es sencilla, con las interfaces podemos heredar otras interfaces, y con los type no podemos hacer eso. Esto se vera con mucha mas claridad en POO */
