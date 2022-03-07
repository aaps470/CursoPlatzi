// Arrow functions, Promesas y Parametros en objetos

//Propiedad de objetos mejorada

//Definimos algunas variables primero

let name = 'jeff';
let age = 24;

//antes de ES6

obj = {
    name: name,
    age : age
};

//Ahora con ES6

obj2 = {
    name,
    age
};

// Ahora, se mostrara en consola para verificar que efectivamente se creo el objeto

console.log(obj2);

//Ahora veremos las Arrow function

//Estas tienen una sintaxis muy reducidad y permiten trabajar con un This no vinculable... Pero como funciona?

const names = [
    {name: 'Jeff', age: 24},
    {name: 'Aleja', age: 21}
]

//Como pudimos ver, vamos a trabajar con un array de dos objetos, dichos objetos son anonimos.

//Antes de ES6

let listOfNames = names.map(function(item) {
    console.log(item.name)
})

//Defino el nombre de mi variable en la que voy a trabajar (listOfNames), ahora, utilizo el metodo .map, Por si no recuerdas, .map me permite crear un nuevo array dependiendo de la funcion a la que llame. generalmente se usaban funciones anonimas

//Ahora con ES6

let listOfNames2 = names.map(item => console.log(item.name));

//Algo caracteristico e indispensable de las arrow function es el (=>) esto inmediatamente nos indica que estamos trabajando con una arrow function. Ahora bien, es posible observar que en este tip o de funciones nos ahorramos definir una funcion anonima y es posible expresarlo todo en una sola linea. En este caso en particular, esta funcion nos mostrara en consola todos los nombres de nuestro array

//Otra forma de escribir un arrow function:

const listOfNames3 = (name, age, country) => {

}

//tener en cuenta que en esta forma, trabajamos con las keys que necesitamos de los objetos.

//Ahora, otra forma seria:

const listOfNames4 = name => {

}

//Este ultimo se usa solo cuando voy a trabajar con un unico atributo, de forma que me puedo evitar colocar los parentesis

//Finalmente, la ultima seria

const square = num => num*num;


//Ahora, trabajaremos con promesas
//JS no es soncronico, significa que no puede haber mas de un evento que se este ejecutado.

//para solucionar el problema del sincronismo en JS, ademas del Callback Hell nacen las promesas. Basicamente, una promesa en JS nos indica que algo va a pasar.

//PILAS, JS es asincronico todo el tiempo. Debes comprender muy bien esto para entender como tu codigo va a correr y no toparte con algo inesperado en tu programa.

const helloPromise = () => {
    return new Promise ((resolve, reject) => {
        if(true){
            resolve('Hey!');
        } else {
            reject ('Ups!');
        }
    });
}

//Aclaramos un poco:
//Las promesas tienen 3 estados: pending, resolve, reject.
//Resolve nos quiere decir que la promesa se cumplio, mientras que reject es que no. para poder verificar si se cumplio o no acudimos al uso de condicionales.

helloPromise() //Esta linea me permite ejecutar la promesa
    .then(response => console.log(response))
    .then(()=> console.log('hola'))
    .catch(error => console.log(error));

//Them me permite obtener las respuesta (pueden ser varios)
//Catch me permite obtener el error en caso de que no se cumpla la promesa


