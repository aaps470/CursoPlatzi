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

// console.log(Object.keys(carlos));
// console.log(Object.getOwnPropertyNames(carlos));

// console.log(Object.entries(carlos));

    // console.log(Object.entries(carlos)[1][0]); // Codigo probado en consola
    // console.log(Object.entries(carlos)[1][1]); // Codigo probado en consola
    // console.log(Object.entries(carlos)[3][1]); // Codigo probado en consola
    // console.log(Object.entries(carlos)[3][1]("Curso 2")); // Error
     
console.log(Object.getOwnPropertyDescriptors(carlos));

//defineProperty recibe tres argumentos

Object.defineProperty(carlos, "pruebaNasa", {
    value: "extraterrestres",
    writable: true,
    enumerable: true,
    configurable: true
})