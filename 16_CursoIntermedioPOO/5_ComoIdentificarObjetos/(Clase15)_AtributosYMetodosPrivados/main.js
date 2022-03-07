/*
    function isObject
    function isArray
    function deepCopy
    function requiredParam
*/

// Fabrica de estudiantes
function Student({
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
} = {}) { 
    this.name = name;    
    this.email = email;
    this.age = age;
    this.approvedCourses = approvedCourses;
    this.socialMedia = {
        twitter,
        instagram,
        facebook,
    };
    const private = {
        "_learningPaths": [],
    }

    // Hacer la propiedad learningPaths privada
    Object.defineProperty(this, 'learningPaths', {
        get() {
            return private["_learningPaths"];
        },
    
        set(newLP) {
            if (newLP instanceof LearningPath) {
                private["_learningPaths"].push(newLP);
            } else {
                console.warn('Algunos de los LPs no es una instancia del prototipo LearningPath')
            };
        },
    });

    // Detector de Rutas SUS o rutas Verdaderas
    for (learningPathIndex in learningPaths){
        this.learningPaths = learningPaths[learningPathIndex]
    };
};



// LearningPaths Prueba
const escuelaWebDev = new LearningPath({ name: 'Escuela de WebDev', courses: []}); 
const escuelaDataScience = new LearningPath({ name: 'Escuela de Data Science', courses: []}); 
// Estudiante Prueba
const juan = new Student({ 
    name: 'Carlito',
     email: 'carlito@mazzarolito.com',
    learningPaths: [
        escuelaWebDev,
        escuelaDataScience,
        {
            name: 'Escuela SUS',
            courses: [],
        }
    ]
});