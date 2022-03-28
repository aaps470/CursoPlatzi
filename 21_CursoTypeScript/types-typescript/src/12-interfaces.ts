//Funcion para mostrar una Fotografia
export {}

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

//Interface

interface Picture {
    title: string;
    date: string;
    orientation: PhotoOrientation
}

//Con interface defino todo los tipos de variables que voy a usar y simplemente lo llamo dentro el objeto

function showPicture(picture: Picture) {
    console.log(`[title: ${picture.title}, 
                    date: ${picture.date}, 
                    orientation: ${picture.orientation}]`);
}

//Ejemplos para llamar a la funcion showPicture

let myPic = {
    title: 'Test Title',
    date: '2020-03',
    orientation: PhotoOrientation.Landscape
};

showPicture(myPic);
showPicture({
    title: 'Test Title',
    date: '2020-03',
    orientation: PhotoOrientation.Portrait,
   // extra: 'test' // Error
})

//Interfaces: propiedades opcionales
/*No todas las porpiedades de una interfaz podrian ser requeridas.
Establecemos una propiedad como opcional con el simbolo (?) despues del nombre*/

interface PictureConfig {
    title?: string;
    date?: string;
    orientation?: PhotoOrientation
}

const generatePicture = (config: PictureConfig) => {
    
    const pic = {title: 'Default', date: '2020-03'};
    if(config.title) {
        pic.title = config.title
    }
    if(config.date ) {
        pic.date = config.date;
    }

    return pic;
}

let picture = generatePicture({});
console.log('picture', picture);

picture = generatePicture({
    title: 'Travel Pic'
})
console.log('picture', picture);

picture = generatePicture({
    title: 'Travel Pic',
    date: '2022-03',
})
console.log('picture', picture);


// Interfaces: Propiedades de Solo Lectura

/*Algunas propiedades de la interfaz podrian no ser "modificables" una vez creado el objeto.

Esto es posible usando (readonly) antes del nombre de propiedad*/


//Ejemplo: Interfaz; usuario

interface User {
    readonly id: number; //Solo lectura
    username: string;
    isPro: boolean;
}

let user: User;
user = {id: 10, username: 'Anktor', isPro: true};
console.log('user', user);

user.username = 'paparazzi';
//user.id = 20; //Error porque al estar marcada como readonly no se puede modificar su contenido luego de ser definida.
console.log('user ', user);