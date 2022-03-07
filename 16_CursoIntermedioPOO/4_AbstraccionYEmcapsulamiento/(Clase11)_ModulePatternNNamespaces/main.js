/*Module pattern y namespaces: propiedades privadas en JavaScript
JavaScript no es un lenguaje fuertemente tipado, osea, que no tenemos que definir el tipo de nuestras variables. JavaScript entenderá que tipo de variable estamos usando.

En javascript no hay una palabra clave para definir una variable privada por lo que podemos crear una función que nos permita crear esta variable.

Por lo general, podemos usar el Object.defineProperty() para crear la variable publica o privada */


function requiredParam(param){
    throw new Error(param + " Campo obligatorio");
}

// Fabrica de estudiantes
function createStudent({
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
} = {}) {
    const private = {
        "_name": name,
    };

    const public = {
        age,
        email,
        approvedCourses,
        learningPaths,
        socialMedia: {
            twitter,
            instagram,
            facebook,
        },
        readName() {
            return private["_name"];
        },
        changeName(newName) {
            private["_name"] = newName;
        },
    };

    // Protegemos propiedades del objeto public
    Object.defineProperty(public, "readName", {
        writable: false,
        configurable: false,
    })
    Object.defineProperty(public, "changeName", {
        writable: false,
        configurable: false,
    })

    return public 
}

const juan = createStudent({
    name: 'Carlito',
    age: 20,
    email: 'carlito@mazzarolito.com',
    twitter: 'carlitosmzz',
}); // {}