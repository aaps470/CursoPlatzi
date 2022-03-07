/* ## Static: atributos y métodos estáticos en JavaScript

Hasta ahora habíamos aprendido que apara acceder a los métodos o atributos de una clase o prototipo teníamos que crear una instancia del prototipo(Objeto). Pero hay una forma de que podemos saltarnos tener que crear una instancia del prototipo para acceder a los métodos o atributos, esta es la forma **Static***/

//Metodos estaticos de Object

const objetito = {
    name: "Carlitos",
    email: "carlitosmazzaroli@gmail.com",
    age: 16,
}

/*### [Object.keys()]

Nos devuelve una lista con todos los keys(nombres claves) de nuestro objeto objetito*/

Object.keys(objetito)
// (3) ["name", "email", "age"]



/*### `[Object.getOwnPropertyNames()]

Hace prácticamente lo mismo que Object.keys con pequeñas diferencias*/

Object.getOwnPropertyNames(objetito)
// (3) ["name", "email", "age"]



/*### `[Object.entries()]

El método entries nos devolverá un arrays de arrays donde tendremos nuestra palabra clave con su  respectivo valor por cada propiedad del prototipo [key,  value] */

Object.entries(objetito)
// [
//     0: (2) ["name", "Carlitos"]
//     1: (2) ["email", "carlitosmazzaroli@gmail.com"]
//     2: (2) ["age", 16]
// ]



/*### `**[Object.getOwnPropertyDescriptors()]

Nos devuelve todas las propiedades de los objetos, con sus keys y values, y otros atributos. Los atributos `**writable**`, `**configurable**` y `**enumerable**` es la forma que tiene JavaScript para limitar el acceso modificar o modificación de nuestros atributos o de nuestros objetos. */

Object.getOwnPropertyDescriptors(objetito) 
// {
//     age:{
//         configurable: true
//         enumerable: true
//         value: 16
//         writable: true
//     }
//     email:{
//         configurable: true
//         enumerable: true
//         value: "carlitosmazzaroli@gmail.com"
//         writable: true
//     }
//     name:{
//         configurable: true
//         enumerable: true
//         value: "Carlitos"
//     }
// }