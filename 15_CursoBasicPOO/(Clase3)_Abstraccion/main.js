class Course {
    constructor({
        name,
        classes = [], 
    }) {
        this.name = name;
        this.clases = classes;
    }
}

class LearningPath {
    constructor({
        name,
        courses = [],
    }) {
        this.name = name;
        this.courses = courses;
    }
}

const cursoProgBasica = new Course({
    name: "Curso Gratis de Programacion Basica",
});

const cursoDefHTMLCSS = new Course({
    name: "Curso Definitivo de HTML y CSS",
});

const cursoPracHTMLCSS = new Course({
    name: "Curso Practico de HTML y CSS",
});

const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
        cursoProgBasica,
        cursoDefHTMLCSS,
        cursoPracHTMLCSS,
    ],
});

const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
        cursoProgBasica,
        "Curso DataBusiness",
        "Curso Dataviz",
    ],
});

const escuelaVgs = new LearningPath({
    name: "Escula de Videojuegos",
    courses: [
        cursoProgBasica,
        "Curso de Unity",
        "Curso de Unreal",
    ]
});

