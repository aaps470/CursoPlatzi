//Objeto Literal

const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS",
    ],
    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    },
};

// Hacer que Natalia apruebe otro curso

natalia.cursosAprobados.push("Curso de Responsive Design");




//Creacion del prototipo Student

function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    //this.aprobarCurso = function(nuevoCursito){
    //    this.cursosAprobados.push(nuevoCursito);
    //}
}

Student.prototype.aprobarCurso = function(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    }


//Instancia de Student

const juanita = new Student(
    "Juanita Alejandra",
    15,
    [
        "Curso de Introduccion a la produccion de Videojuegos",
        "Curso de Creacion de Personajes",
    ]
);


//TODO LO ANTERIOR FUE LA PRIMERA CLASE, AHORA AQUI ABAJO ES LA CLASE DE CLASS EN JS

class Student2 {
    constructor(name, age, cursosAprobados) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    }
}

const miguelito = new Student2 (
    "Miguel",
    28,
    [
        "Curso Analisis de Negocios para Ciencias de Datos",
        "Curso de Principios de visualizacion de datos para BI",
    ],
);