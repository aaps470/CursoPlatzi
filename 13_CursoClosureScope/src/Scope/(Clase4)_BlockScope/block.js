const fruit = () => {
    if (true) {
        //De esta forma puedo acceder a las variables declaradas dentro del IF, se puede acceder a ellas fuera del IF
        // var fruit1 = 'Apple';
        // var fruit2 = 'Banana';
        // var fruit3 = 'Kiwi';
        //cuando declaro las variables con LET y/o CONST dentro del IF, son locales para el bloque de codigo del IF
        //y no las puede acceder fuera del bloque IF, asi esten en la misma funcion
        var fruit1 = 'Apple';
        let fruit2 = 'Banana';
        const fruit3 = 'Kiwi';

        console.log(fruit2);
        console.log(fruit3);
    }

    console.log(fruit1);
    // console.log(fruit2);
    // console.log(fruit3);

    //para poder acceder a las variables fruit2 y fruit3, debo colocarlas dentro del bloque de codigo donde fueron declaradas , en este caso IF
}

fruit();

/*Ejemplo 2*/

// //Esta variable esta en ambito global,
// let x = 1;
// {
     //esta variable esta en ambito local, 
     //y asi tenga el mismo nombre de la del ambito local, mantienen cada una su valor
    //let x = 2;
    //console.log(x);
// }
// console.log(x);

var x = 1;
{
    //esta variable esta en ambito local, 
    //y asi tenga el mismo nombre de la del ambito local, 
    //la asignacion hecha del ambito local se transfiere a la variable global
    var x = 2;
    console.log(x);
}
console.log(x);

/*Ejemplo 3*/

// De esta forma solo muestra el valor diez, aunque lo muestra 10 veces, 
//esto ocurre porque nos muestra el ultimo valor de la variable
// dentro del ambito del ciclo for esta asignado el diez.

// const anotherFunction = () => {
//     for (var i = 0; i < 10; i++) {
//         setTimeout(() => {
//             console.log (i);
//         }, 1000)
//     }
// };

//al cambiar la forma de asignacion de declaraciòn de la variaable dentro del FOR,
//y usar LET, nos muestra el resultado esperado.
const anotherFunction = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log (i);
        }, 1000)
    }
};

anotherFunction();