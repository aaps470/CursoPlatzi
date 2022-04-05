import { addProduct, calcStock, products } from './products.service'

addProduct({
  name: 'Producto 1',
  stock: 5,
  createAt: new Date(1994, 3, 5)
  //size no es necesario porque esta marcada como opcional
});

addProduct({
  name: 'Producto 2',
  stock: 6,
  createAt: new Date(1994, 3, 5),
  size: 'M'
});

console.log(products);
const total = calcStock()
console.log('Total de productos en stock ', total);
