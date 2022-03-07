/*Los Getters y setters son métodos de acceso, lo que significa que generalmente son una interfaz publica para cambiar miembros de las clases privadas. */

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

        // getters y setters
        get name() {
            return private["_name"];
        },

        set name(newName) {
            if (newName.length != 0){
                private["_name"] = newName;
            } else {
                console.warn('tu nombre debe tener al menos 1 caracter')
            }
        },
    };

    return public 
}

const carlos = createStudent({
    name: 'Carlito',
    age: 20,
    email: 'carlito@mazzarolito.com',
    twitter: 'carlitosmzz',
}); // {}