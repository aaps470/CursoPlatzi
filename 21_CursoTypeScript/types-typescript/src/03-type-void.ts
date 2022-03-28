//--------------- Tercera Clase: Void y never--------------------------------

/*Tipo Void: Representa la ausencia de tipo. usado en funciones que no retornan nada.
Tipo Never: Representa funciones que lanzan excepciones o nunca retornan un valor.*/

//Void


//Tipp explicito

function showInfo(user: any): any {
    console.log ('User Info', user.id, user.username, user.firstName);
}

showInfo({id: 1, username: 'Anktor', firstName: 'Andres'});

//Prueba con Arrow Function

const showInfo2: any = (user: any) => {
    console.log('User Info', user.id, user.username, user.firstName);
}

showInfo2({id: 2, username: 'aaps470', firstName: 'Alejandro'})



//Tipo Inferido

function showFormattedInfo (user: any) {
    console.log ('Use Info', `
        id: ${user.id}
        username: ${user.username}
        firstName: ${user.firstName}
    `);
}

showFormattedInfo({id: 1, username: 'Anktor', firstName: 'Andres'});

//Prueba  con Arrow Function

const showFormattedInfo2 = (user: any) => {
    console.log ('Use Info', `
        id: ${user.id}
        username: ${user.username}
        firstName: ${user.firstName}
    `);
}

showFormattedInfo2({id: 2, username: 'aaps470', firstName: 'Alejandro'});



//Tipo void, como tipo de dato en una variable

let unusable: void;
//unusable = null; //Error
unusable = undefined;


//Tipo: Never

function handleError(code: number, message: string): never {
    
    //Process your code here
    //Generate a massage
    throw new Error(`${message}. Code: ${code}`);
}
try {
    handleError(404, 'Not Found');
} catch (error) {
    
}


const sumNumbers = (limit: number):never => {
    let sum = 0;
    while (true) {
        sum++;
    }
    //return sum;
}

sumNumbers(10);
//ciclo infinito, programa nunca termina