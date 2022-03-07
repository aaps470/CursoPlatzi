/*## Deep Copy con recursividad

Se dice que el objeto tiene un **Deep Copy** cuando cada propiedad del objeto apunta a una copia separada, incluso si la propiedad apunta a un objeto (valores de referencia). Se crea una copia separada del objeto de referencia para el objeto de destino. En caso de copia profunda, las propiedades de referencia del objeto de origen y las propiedades de referencia del objeto de destino apuntan a diferentes ubicaciones de memoria. 

### Resumen de Deep Copy

- El objeto de destino contiene una copia separada del nombre, la edad y la designación.
- Instancias separadas de tipos de valor. Se crea una referencia separada para objetos complejos ("dirección")

La propiedad "Dirección" de los objetos de origen y destino apuntan a diferentes ubicaciones de memoria. Si el usuario actualiza la propiedad de la dirección en el objeto de origen, las actualizaciones no se reflejan en el objeto de destino.*/

const obj1 = {
    a: 'a',
    b: 'b',
    c: {
        d: 'd',
        e: 'e',
    },
    editA() {
        this.a = 'Abcd'
    }
};

function isObject(subject) {
    return typeof subject == "object";
}
function isArray(subject) {
    return Array.isArray(subject);
}


function deepCopy(subject) {
    let copySubject;

    const subjectIsObject = isObject(subject)
    const subjectIsArray = isArray(subject)
 
    // inicializamos la variable copySubject segun su tipo de dato
    if (subjectIsArray) {
        copySubject = [];
    } else if (subjectIsObject) {
        copySubject = {};
    } else {
        return subject;
    }

    // Empieza la recursividad
    for (key in subject) {
        const keyIsObject = isObject(subject[key]); // propiedad de nuestro elemento

        if (keyIsObject) {
            copySubject[key] = deepCopy(subject[key]) // Si la propiedad es un objeto, se vuelve a llamar a deepCopy para volver a hacer las asignaciones por cada una de las propiedades de los objetos.
        } else {
            if (subjectIsArray) {
                copySubject.push(subject[key])
            } else {
                copySubject[key] = subject[key]
            }
        }
    }

    return copySubject;
}

// Pruebas en devTools
// const obj2 = deepCopy(obj1);

// obj1
// obj2

// obj1.a = 'AMORMIO'

// obj2.a = 'Si estoy debajo del vaivén de tus piernas'

// obj1
// obj2