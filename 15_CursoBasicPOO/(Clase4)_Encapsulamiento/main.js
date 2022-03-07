/*Encapsulación

La encapsulación es el empaquetamiento de datos y funciones en un componente (por ejemplo, una clase) y para luego controlar el acceso a ese componente para hacer un efecto de “caja negra” fuera del objeto. Debido a esto, un usuario de esa clase solo necesita conocer su interfaz (es decir, los datos y las funciones expuestas fuera de la clase), no la implementación oculta.*/

/*APLICANDO LA PRIMERA FORMA DE ENCAPSULAMIENTO: GETTERS N' SETTERS*/ 

class Course {
    constructor({
        name,
        classes = [], 
    }) {
        this._name = name;
        this.clases = classes;
    }

    get name() {
        return this._name;
    }

    set name(nuevoNombrecito) {
        if(nuevoNombrecito === "Curso Malito de Program Basic") {
            console.error("Wey... no");
        } else {
            this._name = nuevoNombrecito;
        }
        
    }
}

const cursoProgBasica = new Course({
    name: "Curso Gratis de Programacion Basica",
});

cursoProgBasica.name
// Curso Gratis de Programacion Basica