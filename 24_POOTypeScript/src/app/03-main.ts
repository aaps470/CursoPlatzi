import { ProductHttpService } from "./services/product-http.service";

(async () => {

  const ProductService = new ProductHttpService();

  console.log('--'.repeat(10));
  console.log('getAll');
  const products = await ProductService.getAll();
  console.log(products.length);
  console.log(products.map(item => item.price));

  const productId = products[0].id;
  console.log('--'.repeat(10));
  console.log('update');

  await ProductService.update(productId, {
    price: 10000,
    title:'new title',
    description: 'new description'
  });

  console.log('--'.repeat(10));
  console.log('findOne');
  const product = await ProductService.findOne(productId);
  console.log(product);
})();

