/*Objetos: JS es un lenguaje que está diseñado en un paradigma de objetos.

Ejemplo de Objeto:*/

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020
};

/*Acceder a una propiedad del objeto:*/

miAuto.marca //Toyota

/*Se pueden agregar propiedades que van a ser una función, se les llama métodos de objetos.*/

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020, 
    detallesDelAuto: function () {
        console.log(`Auto ${this.modelo} ${this.año}`);
    }
}

    // miAuto.detallesDelAuto();
    //Auto Corolla 2020

/*¿Quién es this?
Es una variable que hace referencia al objeto. En este caso: this = miAuto*/