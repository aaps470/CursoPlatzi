class SuperObject {

    static isObject(subject) {
        return typeof subject == "object";
    }

    static isArray(subject) {
        return Array.isArray(subject);
    }

    static deepCopy(subject) {
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
}