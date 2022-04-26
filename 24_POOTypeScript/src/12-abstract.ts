/*Clases Abstractas: Restringir la creacion de objetos base */

import { Animal, Dog } from "./09-protected";

const animal = new Animal ('elite');
animal.greeting();

const cheis = new Dog ('cheis', 'andres');
cheis.greeting();
cheis.woof(2);

/*Al poner abtract a una clase padre lo que hace es que se comporte como un cascaron base, sus hijos pueden tomar sus parametros y trabajar con ellos pero no se puede trabajar con el padre

Algo curioso de abstract (lo implemente en el 09-protected pero lo quite poque generaba errores) es que si lo pones en la clase padre no puedes generar ninguna variable con ella, es decir:

con aniaml = new Animal da error por eso porque Animal es abstract, pero con el caso de sus hijos no hay problema puedo seguir usandolos sin generar un error como el casi de Dog que es hijo de Animal*/

