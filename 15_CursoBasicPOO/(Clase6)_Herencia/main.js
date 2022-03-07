class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }

}

class Course {
    constructor({
        name,
        classes = [], 
        isFree = false,
        lang = "spanish",
    }) {
        this._name = name;
        this.clases = classes;
    }
}
//La Herencia se aplica con EXTENDS, basicamente las nuevas clases creadas que tenganel atributo extends recibiran los diferentes parametros dados en la clase madre

class FreeStudent extends Student{
    constructor(props) {
        super(props);
    }

    approvedCourses(newCourse) {
        if(newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos");
        }
    }
}

class BasicStudent extends Student{
    constructor(props) {
        super(props);
    }

    approvedCourses(newCourse) {
        if(newCourse.lang === "english") {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos, " + this.name + ", no puedes tomar cursos en ingles");
        }
    }
}

class ExpertStudent extends Student{
    constructor(props) {
        super(props);
    }

    approvedCourses(newCourse) {
        this.approvedCourses.push(newCourse);
    }
}
