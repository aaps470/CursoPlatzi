/*### [Object.isSealed()]

El método `**Object.isSealed()**` si el objeto está sellado.

Devuelve true si el objeto está sellado, de lo contrario devuelve false. Un objeto está sellado si no es extensible y si todas sus propiedades no se pueden configurar y por lo tanto no removibles (pero no necesariamente no modificables).

### [Object.isFrozen()]

El método `**Object.isFrozen()**` determina si un objeto está congelado.

Devuelve true si el objeto está sellado, de lo contrario devuelve false. Un objeto está sellado si no es extensible y si todas sus propiedades no se pueden configurar y por lo tanto no removibles (pero no necesariamente no modificables).

Un objeto está congelado si y solo si no es extendible, todas sus propiedades son no-configurables, y todos los datos de sus propiedades no tienen capacidad de escritura. */

/* Codigo para hacer un DeepCopy */
const studentBase = {
    name: undefined,
    email: undefined,
    age: undefined,
    approvedCourse: undefined,
    learningPaths: undefined,
    socialMedia: {
        twitter: undefined,
        instagram: undefined,
        facebook: undefined,
    }
};

const carlos = deepCopy(studentBase);
// Object.defineProperty(carlos, "name", {
//     value: "Carlitos",
//     configurable: false,
// });
Object.seal(carlos); // Es lo mismo que lo de arriba pero mas easy
carlos.name = "Carlitos";


Object.isSealed(carlos); // Nos muestra con True o False si todas las propiedades estan selladas
Object.isFrozen(carlos); // Nos muestra con True o False si todas las propiedades estan congeladas