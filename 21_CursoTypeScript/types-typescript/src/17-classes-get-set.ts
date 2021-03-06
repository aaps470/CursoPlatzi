//Clases: Metodos Set y Get
/*TS soporta los metodos accesores set y get como una forma de interceptar los accesos a los miembros provados de un objeto*/

export {}

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

class Picture {
    //Propiedades
    private _id: number;
    private _title: string;
    private _orientation: PhotoOrientation;

    public constructor(id: number, 
                title: string, 
                orientation: PhotoOrientation) {
        this._id = id;
        this._title = title;
        this._orientation = orientation;
                }

    get id() {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get title() {
        return this.title;
    }

    set title(title: string) {
        this._title = title;
    }

    get orientation() {
        return this._orientation
    }

    set orientation(o: PhotoOrientation) {
        this._orientation = o;
    }


// Comportamiento

    public toString() {
        return `[id: ${this.id},
                 title: ${this.title},
                 orientation: ${this.orientation}]`;
    }
}

class Album{
    private _id:number;
    private _title: string;
    private picture: Picture[];

    public constructor(id:number, title:string) {
        this._id = id;
        this._title = title;
        this.picture = [];
    }

    public addPicture(picture: Picture) {
        this.picture.push(picture);
    }

    get id() {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get title() {
        return this.title;
    }

    set title(t: string) {
        this._title = t;
    }
}

const album: Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture (1, 'Platzi Session', PhotoOrientation.Square);
album.addPicture(picture);

console.log('album ', album);


//Accediendo a los miembros publicos
console.log('picture.id', picture.id); //get id()

picture.id = 100; //private, set id(100);
picture.title = 'Another Title'; //private
album.title = 'Personal Activities';//private
console.log ('album ', album);