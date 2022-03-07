/*El duck typing es la forma de progamar donde identificamos a nuestros elementos dependiendo de los métodos y atributos que tengan por dentro. */

/*
function isObject
function isArray
function deepCopy
function requiredParam
*/

// Requerimientos de parametros obligatorios
function requiredParam(param){
    throw new Error(param + " Campo obligatorio");
}

// Fabrica de rutas de aprendizajes
function createLearningPath({
    name = requiredParam("name"),
    courses = [],
}) {
    const private = {
        "_name": name,
        "_courses": courses,
    };
    
    const public = {
         // getters y setters NAME
         get name() {
            return private._name;
        },
        set name(newName) {
            if (newName.length != 0){
                private._name = newName;
            } else {
                console.warn('tu nombre debe tener al menos 1 caracter')
            }
        },

         // getters y setters COURSES
         get courses() {
            return private._courses;
        },
    };

    return public
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
        "_learningPaths": learningPaths,
    };

    const public = {
        age,
        email,
        approvedCourses,
        socialMedia: {
            twitter,
            instagram,
            facebook,
        },
        // getters y setters NAME
        get name() {
            return private._name;
        },

        set name(newName) {
            if (newName.length != 0){
                private._name = newName;
            } else {
                console.warn('tu nombre debe tener al menos 1 caracter')
            }
        },


        // getters y setters LEARNING PATHS
        get learningPaths() {
            return private._learningPaths;
        },

        set learningPaths(newLP) {
            if (!newLP.name) {
                console.warn('tu LP no tiene la propiedad name')
                return;
            }
            
            if(!newLP.courses) {
                console.warn('tu LP no tiene courses')
                return;
            }

            if (!isArray(newLP.courses)) {
                console.warn('tu LP no es una lista (*de cursos)')
                return;
            }
            private._learningPaths.push(newLP);

        },
    };

    return public 
}

// Estudiante Prueba
const juan = createStudent({ 
    name: 'Carlito', age: 20, email: 'carlito@mazzarolito.com', twitter: 'carlitosmzz',
});