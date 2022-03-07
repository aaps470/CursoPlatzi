// Hablemos de Async Await

const helloWorld = () => {
    return new Promise ((resolve, reject) =>{
        (true)
            ? setTimeout(() => resolve('Hello world'), 3000)
//Esta linea simplemente nos dice: ? (Se cumple), si se cumple nos demoraremos 3 segundos en entregar.
            : reject(new Error('Test Error'))
//El : que viene con el reject. Es cuando la promesa no se cumple
    })
}


const helloAsync = async() => {
    const hello = await helloWorld;
    console.log(hello);
}

//Podemos notar que la sintaxis es ciertamente amigable, y hacemos uso de terminos resevados en JS como asinc, await
helloAsync();


const anotherFunction = async() => {
    try {
        const hello = await helloWorld()
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

//La funcion de Try/Catch es muy similar a la de try/Except que se maneja en Python. Simplemente, con try escribimos el codigo que esperamos se ejecute, en caso contrario, el codigo de catch sera el que se ejecutara

anotherFunction();