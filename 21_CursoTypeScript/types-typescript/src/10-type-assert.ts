/*Aserciones de Tipo:

Cuando el programador puede conocer mas que TS sobre el valor de una variable

Es un mensaje al compilador: "Confia en mi, se lo que hago"

Se parece al casting de tipos en otros lenguajes de programacion

Usa dos sintaxis: <Angle Bracket> y (variable as tipo)*/


// <tipo> // Angle Bracket syntax
export {}

let username: any;
username = 'anktor';

//tenemos una cadena, TS confia en mi!

let massage: string = (<string>username).length > 5 ?
                    `Welcome ${username}`:
                    'Username is too short'
                    
console.log('massage', massage);

let usernameWithId: any = 'luixaviles 1';
//Como obtener el username?

username = (<string>usernameWithId).substring(0, 10);
console.log('Username only ', username);


//Sintaxis "as"

massage = (username as string).length > 5 ?
            `Welcome ${username}`:
            'Username is too short'

let helloUser: any;
helloUser = 'Hello paparazzi';
username = (helloUser as string).substring(6);

console.log('username ', username);
