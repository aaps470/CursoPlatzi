//Miembros Privados:

/*TS tambien sporta (a partir de la version 3.8) la nueva sintaxis JS para miembros privados: #atributo

Esta caracteristica puede ofrecer mejores garantias de aislamiento en miembros privados*/

export {}

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

class Picture {
    //Propiedades
    #id: number;
    #title: string;
    #orientation: PhotoOrientation;

    public constructor(id: number, 
                title: string, 
                orientation: PhotoOrientation) {
        this.#id = id;
        this.#title = title;
        this.#orientation = orientation;
                }

// Comportamiento

    public toString() {
        return `[id: ${this.#id},
                 title: ${this.#title},
                 orientation: ${this.#orientation}]`;
    }
}

class Album{
    #id:number;
    #title: string;
    #picture: Picture[];

    public constructor(id:number, title:string) {
        this.#id = id;
        this.#title = title;
        this.#picture = [];
    }

    public addPicture(picture: Picture) {
        this.#picture.push(picture);
    }
}

const album: Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture (1, 'Platzi Session', PhotoOrientation.Square);
album.addPicture(picture);

console.log('album ', album);


//Accediendo a los miembros publicos

//picture.id = 100; //Error porque es privado
//picture.title = 'Another Title'; //Error
//album.title = 'Personal Activities';//Error
console.log ('album ', album);