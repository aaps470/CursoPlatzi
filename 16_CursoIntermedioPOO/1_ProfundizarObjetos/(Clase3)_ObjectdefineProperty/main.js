/*### Object.defineProperty()

Este método nos permite modificar el comportamiento por defecto de las propiedades. Es decir, nos permite definir una propiedad como no enumerable, no modificable o incluso evitar que pueda ser eliminada del objeto.

Value: El valor asociado a la propiedad. Puede ser cualquier tipo valido de JavaScript  (number, object, function, etc).**Por defecto es `undefined`.

Enumerable: `true` si y solo si dicha propiedad se muestra durante la enumeración de las propiedades del objeto correspondiente. Por defecto es `false`.

Writable: `true` Indica si el valor de la propiedad puede modificarse con el  [operador de asignación (en-US)]. Defaults to `false`.

Configurable: `true` si y solo si el tipo de descriptor de propiedad puede modificarse y si la propiedad puede ser eliminada del correspondiente objeto.**Por defecto es `false`.*/

const carlos = {
    name: 'carlito',
    age: 18,
    approvedCourses: ["Curso 1"],
    
    addCourse(newCourse) {
        console.log("This", this);
        console.log("This.approvedCourses", this.approvedCourses);
        this.approvedCourses.push(newCourse); // this hace referencia al objeto carlos
    },
};

// parte 1
// Object.defineProperty(carlos, "navigator", {
//     value: "Chrome",
//     enumerable: false,
//     writable: true,
//     configurable: true,
// });

// Object.defineProperty(carlos, "editor", {
//     value: "VSCode",
//     enumerable: true,
//     writable: false,
//     configurable: true
// });

// Object.defineProperty(carlos, "terminal", {
//     value: "WSL",
//     enumerable: true,
//     writable: true,
//     configurable: false,
// });


// Object.defineProperty(carlos, "pruebaNasa", {
//     value: "marcianito",
//     enumerable: false,
//     writable: false,
//     configurable: false,
// });


// PARTE 2

/*### Object.seal()

El método Object.freeze() impide que se puedan eliminar las propiedades

### Object.freeze()

El método Object.freeze() impide que se le agreguen nuevas propiedades e impide que se puedan eliminar las propiedades ya existentes */



Object.seal(carlos) // configurable se vuelve false
// Object.freeze(carlos) // configurable y writable se vuelven false

console.log(Object.getOwnPropertyDescriptors(carlos));