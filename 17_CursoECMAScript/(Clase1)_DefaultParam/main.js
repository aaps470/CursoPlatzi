//Primero vamos a trabajar como se hacia antes de ES6

function newFuntcion(name, age, country) {
    var name = name || 'Andres';
    var age = age || 28;
    var country = country || 'VZ';
    console.log(name, age, country);
}

//Ahora, con ES6 se realiza asi:

function newFuntion2(name = 'oscar', age = 32, country = "CO") {
    console.log(name, age, country);
}

//Para llamar la funcion hay dos formas:
//Para el primer caso, hay funciones que toman los atributos por si mismos, entonces se pueden dejar vacias

newFuntion2();
newFuntion2('Jeff', 24, 'CO');

//Ahora veremos concatenacion antes de ES6

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//Ahora, con los tamplates se hace mas facil concatenar, es necesario ubicar en nuestros teclados las comillas invertidas

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//Nota: tener en cuenta que cuando escribo ${} estoy trayendo el valor de dicha variable, pero esto solo funciona cuando uso las comillas invertidas
