/*Los bucles pueden ejecutar un bloque de código varias veces. JavaScript admite diferentes tipos de bucles:

for - recorre un bloque de código varias veces

for/in - recorre las propiedades de un objeto

for/of - recorre los valores de un objeto iterable

while - recorre un bloque de código mientras se cumple una condición específica

do/while - también recorre un bloque de código mientras se cumple una condición específica*/


/*Ejemplo: for*/

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiantes){
    console.log('Hola, ${estudiantes}');
}

for(var i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]); 
}

/*Ejemplo: for/of */

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiantes){
    console.log('Hola, ${estudiante}');
}

for(var estudiante of estudiantes) {
    saludarEstudiantes(estudiante); 
}

