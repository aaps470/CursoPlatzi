/*### Shallow copy

El **Shallow Copy** *(copia superficial)* es una copia bit a bit de un objeto. Se crea un nuevo objeto que tiene una copia exacta de los valores del objeto original. Si alguno de los campos del objeto son referencias a otros objetos, solo se copian las direcciones de referencia, es decir, solo se copia la dirección de memoria. */

const obj1 = {
    a: 'a',
    b: 'b',
    c: {
        d: 'd',
        e: 'e',
    },
};

// Shallow Copy con for

const obj2 = {};
for (prop in obj1) {
    obj2[prop] = obj1[prop]; 
}

// Metodos de Object para hacer Shallow Copy

const obj3 = Object.assign({}, obj1);
const obj4 = Object.create(obj1);

/*### [Object.assign()]

El método Object.assign () copia todas las propiedades propias enumerables de uno o más objetos de origen a un objeto de destino. Devuelve el objeto de destino modificado.

Las propiedades del objeto de destino se sobrescriben con las propiedades de los orígenes si tienen la misma clave. Las propiedades de las fuentes posteriores sobrescriben a las anteriores.

### [Object.create()]

El método Object.create () crea un nuevo objeto, utilizando un objeto existente como prototipo del objeto recién creado.

### [La diferencia entre Object.create y Object.assign]

La principal diferencia entre **Object.create()** y **Object.assign()** es que el método **Object.assign** crea un nuevo **Object**. utiliza el objeto proporcionado como prototipo del Objeto recién creado. Mientras que el método **Object.assign()** copia todas las propiedades de los objetos de origen al objeto de destino, que es el primer parámetro de esta función y devuelve este Objeto de destino.

Por lo tanto, vemos que mientras **Object.create()** define propiedades en nuestro **Object** recién creado. **Object.assign()** simplemente asigna el valor de los objetos de origen de destino a nuestro Objeto de destino. */