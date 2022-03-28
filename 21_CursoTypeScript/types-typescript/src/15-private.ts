//Clases: Miembros Privados

/*TS define una manera propia de declarar o marcar un miembro como privado usando la palabra reservada private */

export {}

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

class Picture {
    //Propiedades
    private id: number;
    private title: string;
    private orientation: PhotoOrientation;

    public constructor(id: number, 
                title: string, 
                orientation: PhotoOrientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
                }

// Comportamiento

    public toString() {
        return `[id: ${this.id},
                 title: ${this.title},
                 orientation: ${this.orientation}]`;
    }
}

class Album{
    private id:number;
    private title: string;
    private picture: Picture[];

    public constructor(id:number, title:string) {
        this.id = id;
        this.title = title;
        this.picture = [];
    }

    public addPicture(picture: Picture) {
        this.picture.push(picture);
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


