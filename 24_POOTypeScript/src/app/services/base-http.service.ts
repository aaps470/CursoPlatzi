/* ALgo muy importante que pondre aqui como notas para el futuro, es que POO sigue siendo algo dedicado mas al Backend asi que no te frustres si no se entiende rapidamente

  La aplicacion de los genericos es excelente para cuando quieras crear una clase base y que el tipo de dato sea lo que varie dependiendo de que es lo que quieras usar
  */

import axios from "axios";
import { UpdateProductDto } from "../dtos/product.dto";

import { Category } from "../models/categoty.model";
import { Product } from "../models/product.model";

//Aqui pusimos el generico <generic> TypeClass y que hacemos con el bueno, te lo explico:
export class BaseHttpService<TypeClass> {
  //data: TypeClass[] = [];

  constructor(
    protected url: string
  ) {}

  //Aqui ponemos el generico para utilizar el get del fremawork axios
  async getAll() {
    const { data } = await axios.get<TypeClass[]>(this.url);
    return data;
  }

  async update<ID, DTO>(id: ID, change: DTO) {
    const { data } = await axios.put(`${this.url}/${id}`, change);
    return data;
  }
}

// const service = new BaseHttpService<string>();
// service.getAll();

// const service1 = new BaseHttpService<number>();
// service1.getAll();

// const service2 = new BaseHttpService<Category>()


/* Y aqui esta en verdad la magia de los genericos, arriba hicimos fue la base, el molde

  basicamente le decimos en dos ejemplos que tipo de dato quieres trabajar, en uno se trabajo con Product y el otro con Category con sus distintos parametros que ellos tienen

  El molde obedecera y trabajara con lo que tienen esos tipos de datos*/
(async () => {
  const url1 = 'https://api.escuelajs.co/api/v1/products';
  const productsService = new BaseHttpService<Product>(url1);

  const rta = await productsService.getAll()
  console.log('products', rta.length);
  productsService.update<Product['id'], UpdateProductDto>(1, {
    title: 'asa',

  });

  const url2 = 'https://api.escuelajs.co/api/v1/categories';
  const categotyService = new BaseHttpService<Category>(url2);

  const rta1 = await categotyService.getAll()
  console.log('categories', rta1.length);
})();
