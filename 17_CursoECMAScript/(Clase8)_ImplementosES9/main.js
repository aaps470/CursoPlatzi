//Hablemos de ES9

const obj = {
    name: 'Andres',
    age: 24,
    country: 'CO'
};

let {name, ...all} = obj;
//Aqui desestructuramos el objeto, sacamos el key que nos interesaba que en este caso es age, y para no escribir el resto usamos ...all
console.log(all);

//(...) es conocido como el operador de propagacion, con este, pedemos traer todos los keys con sus respectivos values de objeto, como veremos a continuacon:

const obj1 = {
    ...obj,
    height: 1.81
}

console.log(obj1);
//Como podemos ver obj1, tiene todos los keys del obj y ademas agregamos un nuevo key que seria height




const helloWorld =() => {
    return new Promise((resolve, reject) =>{
        (true)
            ? setTimeout(()=> resolve('Hello World', 3000))
            : reject(new Error('Test Error'))
    });
}

//Esto lo vimos en la clase anterior de Async/Await

//Llamamos la funcion

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(()=> console.log('Finalizo'))




//Como mejoro el manejo de Regex?
//ESto es super util para trabajar con fechas
//Como sabemos, las fechas tienen: año, mes, dia
//el [0-9] nos indica el rango de numeros, mientras que el {4} nos indica que se necesitan maximo 4 numeros

const regexData = /([0-9]{4}) - ([0-9] {2}) - ([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log('Date -> ', year, month, day);

