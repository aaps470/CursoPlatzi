//Async y Await

//La funcion de adelante es un Promise comun y corriente

const helloWorld = () => {
    return new Promise ((resolve, reject) => {
        (true)
        ? setTimeout (() => resolve('Do Something Async'), 3000)
        : reject (new Error('Test Error'))
    })
}

//Ahora a partir de aqui aplicaremos Async y Await

const helloAsync = async() => {
    const hello = await helloWorld();
    console.log(hello);
}

//Se puede notar que la sintaxis es ciertamente amigable, y hacemos uso de terminos reservados de JS como async y await


console.log('Before');
//llamamos a la funcion
helloAsync();
console.log('After');

//A pesar de que tenemos un Before antes de llamar a la funcion y un After despues de llamarla ambas ocurren antes de la funcion helloAsync es asincrona, es decir, ocurre en un segundo plano, esta esperando a que se resuelva el promise, asi que como Before y After ocurren mas rapido salen antes


const anotherFunction = async() => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

console.log('Before1');
//llamamos a la funcion
anotherFunction();
console.log('After1');