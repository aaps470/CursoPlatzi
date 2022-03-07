/*.filter : nos permite filtrar solo los elementos que deseamos (según ciertos criterios) y devolverlos en un nuevo array.

.map : crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.*/

var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre: "Tv", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "Teclado", costo: 500},
    { nombre: "Audifonos", costo: 1700}
];

var aticulosFiltrados = articulos.filter(function(articulo) {
    return articulo.costo <= 500;
});

var nombreArticulos = arituculos.map(function(articulo) {
    return articulo.nombre;
});

/*El método find () devuelve el primer valor que coincide de la colección. Una vez que coincida con el valor en los resultados, no verificará los valores restantes en la colección de matriz.*/

/*El método filter () devuelve los valores coincidentes en una matriz de la colección. Verificará todos los valores de la colección y devolverá los valores coincidentes en una matriz.*/ 

var encuentraArticulo = articulos.find(function(articulo) {
    return articulo.nombre === "Laptop"
});

/*foreach() : Ejecuta lo que le definamos una vez por cada elemento de nuestro array*/

articulos.forEach (function(articulo){
    console.log(articulo.nombre);
});

/*some() : Comprueba si al menos un elemento del array cumple con la condición que le damos*/

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});

