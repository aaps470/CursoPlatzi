//Librerias NO soportadas por TS
/*Que ocurre aqui: bueno al principio habia errores porque esta libreria no estaba soportada por TS
como se soluciono? bueno VSCode es inteligente y nos dijo que instalaramos una dependencia y eso hicimos y taram funciona

Dato Curioso: normalmente usariamos import {} from 'whatever' pero aqui como no esta 'Soportada'
por TS tenemos que usar import _ from 'whatever'*/

//var _ = require('lodash');
import _ from 'lodash';

const data = [
  {
    username: 'nico',
    role: 'admin'
  },
  {
    username: 'Andres',
    role: 'seller'
  },
  {
    username: 'Johana',
    role: 'seller'
  },
  {
    username: 'Mirla',
    role: 'customer'
  }
]
const rta = _.groupBy(data, (item) => item.role);

console.log(rta);

//Con groupBy lo que le digo es que agrupe por el elemento que le diga, en este caso fue por role


