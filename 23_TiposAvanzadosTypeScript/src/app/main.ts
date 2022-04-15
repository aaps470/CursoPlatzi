import faker from '@faker-js/faker'
import { addProduct, findProducts, products, updateProduct } from "./products/product.service";

for (let index = 0; index < 50; index++) {
  addProduct({
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.commerce.color(),
    size: faker.random.arrayElement(['M', 'S', 'L', 'XL']),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.random.arrayElements(),
    title: faker.commerce.productName(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    categoryId: faker.datatype.uuid()
  });
};

console.log(products);
const product = products[0];
updateProduct(product.id, {
  title: 'New Title',
  stock: 80
});



/*Parece bastante complejo ver ese monton de carpetas, pero es la forma mas ordenada de trabajar

El main es solo para hacer basicamente el pedido pero dentro hay un monton de submenus, por lo menos desde aqui conectamos con addProduct, que conecta con Product, que tiene dentro Category y asi otras cosas que dependen de Product, todo conectado con imports, exports e interfaces*/
