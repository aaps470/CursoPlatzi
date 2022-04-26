import axios from "axios";

/*En esta clase estamos usando una libreria llamada axios para consumo dee APIs.

Usamos una funcion que se llama asu mismo para usar el async sin problema*/

(async() =>{

  function delay (time: number) {
    const promise = new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
    return promise;
  }

  function getProducts() {
    const promise = axios.get('https://api.escuelajs.co/api/v1/products');
    return promise;
  }

  async function getProductsAsync() {
    const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
    return rta.data;
  }

  console.log('----'.repeat(10));
  const rta = await delay(3000);
  console.log('rta', rta);
  console.log('----'.repeat(10));
  const products = await getProducts();
  console.log(products.data);
  const productsV2 = await getProductsAsync();
  console.log(productsV2);


})();
