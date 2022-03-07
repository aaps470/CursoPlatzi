//Clases, modulos y generadores

//Las clases nos facilitan la vida como porgramadores y en el caso en particular de JS, nos permiten trabajar con POO

class calculator {
//Introducimos la palabra class con lo cual indicamos que estamos definiendo una clase
    constructor(){
//Las clases necesitan un constructor, en este asignaremos las variables DENTRO DEL SCOPE LOCAL
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA,valueB) {
//Sum vendia siendo un metodo, al cual le pasaremos los dos valores A y B
        this.valueA = valueA;
        this.valueB = valueB;
//Con esto estoy asginando las variables que construi previamente a los valores que recibe
        return this.valueA + this.valueB
//aqui se hace la suma de dichos valores
    }
}

const calc = new calculator();

//Tener en cuenta que para llamar a una clase con una varibale, es necesario el NEW, explicitamente necesario e indispensable. Si se soloca solo el nombre de la clase, esto no va a funcionar.

console.log(calc.sum(5,5));





//Ahora, como trabajamos con modulos?
//Para esto, crearemos otro archivo


//Con esta linea puedo exportar el modulo y llamarlo donode lo necesite

import{hello} from './module';

//Con esta linea importamos el modulo
//esto significa que podemos tener funciones que hagan ciertas tareas en especifico (como llamar a una API), fuera de nuestro documento principal y simplemente importarlas.

hello();




//Ahora, veremos generators

//Tiene una sintaxis especial
//Puede utilizarse para una serie de fibonacci, por ejemplo

function* helloWorld(){
    if(true){
        yield 'hello';
    }
    if(true){
        yield 'world';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
