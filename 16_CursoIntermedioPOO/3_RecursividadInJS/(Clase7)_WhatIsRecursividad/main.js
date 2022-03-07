/* ## Qué es recursividad

Se llama recursividad a un proceso mediante el que una función se llama a sí misma de forma repetida, hasta que se satisface alguna determinada condición. El proceso se utiliza para computaciones repetidas en las que cada acción se determina mediante un resultado anterior.*/


// estructura de una funcion recursiva
// function recursvia() {
//     if (/*validacion */){
//         // llamados recursivos
//     } else {
//         // llamados normales, sin recursividad
//     }
// }

// Hicimos un console.log por cada numerito en nuestra lista
const numeritos = [0,1,2,3,4,5,6,7,8,9,10,11];
// let numerito = 0;

// for (let index = 0; index < numeritos.length; index++) {
//     numerito = numeritos[index];
//     console.log(index, numerito);
    
// }


// Haremos lo mismo con una Funcion recursia
function recursiva(numbersArray) {
    if (numbersArray.length != 0) {
        const firstNum = numbersArray[0];
        console.log(firstNum);

        numbersArray.shift();

        return recursiva(numbersArray)
    }
}

/*### ¿Por qué escribir programas recursivos?

- Son mas cercanos a la descripción matemática.
- Generalmente mas fáciles de analizar
- Se adaptan mejor a las estructuras de datos recursivas.
- Los algoritmos recursivos ofrecen soluciones estructuradas, modulares y elegantemente simples. 

### Factible de utilizar recursividad

- Para simplificar el código.
- Cuando la estructura de datos es recursiva ejemplo : árboles.

### No factible utilizar recursividad

- Cuando los métodos usen arreglos largos.
- Cuando el método cambia de manera impredecible de campos.
- Cuando las iteraciones sean la mejor opción.

## Conclusiones

En definitiva, no hay una norma establecida acerca de cuándo implementar una solución recursiva y cuándo una iterativa. Existen varios factores que ya hemos mencionado a lo largo del artículo y que hay que tener en cuenta respecto a la recursividad, que se resumen en:

- La recursividad consume mucha memoria y tiempo de ejecución.
- La recursividad puede dar lugar a la redundancia (resolver el mismo problema más de una vez)
- A veces es más sencillo encontrar una solución recursiva que una iterativa*/