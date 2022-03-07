/***RORO **= Recibir un Objecto, y Retornamos otro Objecto.

Dentro de una función, recibimos un solo parámetro que es un objecto, el cual internamente contiene varias propiedades, con las cuales retornara otro nuevo objeto. */

/* Codigo Deep Copy */

// Requerimientos de parametros obligatorios
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
    return {
        name,
        age,
        email,
        approvedCourses,
        learningPaths,
        socialMedia: {
            twitter,
            instagram,
            facebook,
        },
    };
}

const carlos = createStudent({
    name: 'Carlito',
    age: 20,
    email: 'carlito@mazzarolito.com',
    twitter: 'carlitosmzz',
}); // {}