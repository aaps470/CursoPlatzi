//Hablemos de Let y Const, stread 0. y Desestructuracion

//Antes de ES6 pasaba esto

let elsa = "Libre soy, libre soy... no puedo ocultarlo \n" + "mas, libre soy, libre soy, se fue la chica ideal";

//Esto funcionaba, sin embargo, no es una opcion muy optima que digamos

//ES6 con la comilla invertida:

let elsa2 = `Voy a probar que puedo hacer sin limitar mi proceder, 
ni mal ni bien que obedever jamaaaaaaaaaaas`;

//Ahora, para verificar que ambas formas funcionan usaremos console.log con ambas

console.log(elsa);
console.log(elsa2);


//Ahora crearemos un objeto

let person = {
    'name' : 'Jeff',
    'age' : 24,
    'country' : 'CO'
}

//Del curso de fundamentos de JS, sabemos que al usar la notacion person.name, llamaremos al atributo correspondiente a la key name del objeto person

console.log(person.name, person.age, person.country);

//ahora, vamos a desestructurar nuestro objeto

let {name, age, country} = person;

//Con la anterior linea lo que hicimos fue desestructurar nuestro objeto, esta notacion es super util porque podemos elegir cuales keys necesitamos del mismo objeto y ya puedo proceder a desplegarlas en el console log sin necesidad de utilizar (objeto.key)

console.log(name, age, country);


//Ahora vamos a trabajar con arrays

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeia', 'Jessica', 'Camila'];

//Ahora, queremos tener un array que contenga a team 1 y team 2, pero ademas de esto, agregar un nuevo miembro que seria Davil. para esto usaremos el (...), esto nos permite traer un array completo

let education = ['David', ...team1, ...team2];

console.log(education);

//Originalmente se usaba var para asignar variables
//Podemos ver que usamos mucho LET, pero Porque?. Bueno, LET se usa para el scope, es decir, se define para el bloque de codigo en el cual se va a usar

{
    var global = "Global Var";
}

{
    let globallet = 'Global Let'
    console.log(globallet)
}

console.log(global)

//Porque no usar VAR? Js es un lenguaje debilmente tipado, es decir, cuando definimos una variable con VAR, podemos cambiar su valor en el transcurso del codigo y con esto podriamos ocasionar distintos BUGS y errores en nuestro prgrama. Por dicho motivo es mejor usar LEY y CONST

const a = 'b';
a = 'a';

//A diferencia de LET, const se puede utilizar en el scope global, sin embargo, este no se deja modificar como si lo hacia VAR. Cuando intentamos hacerlo, este nos muestra el valor inicial que le pusimos a nuestra variable y posteriomente un error que sorresponde a cuando quisimos reasignarle otro valor.

console.log(a);