// Herencia de clases y miembros protegidos

/*TS soporta este patron comun en el mundo de la POO

Implementa la habilidad de extender codigo de clases existentes a traves de la herencia.*/

//Clases Abstractas

/*Las clases Abstractas son la base de donde otras clases podrian derivarse. A diferencia de una Interfaz, una clase Abstracta puede implementar funciones para sus instancias.

La palabra reservada es: abstract*/

export {}

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

//SUPERclase

abstract class Item {
    protected readonly _id: number;
    protected  _title: string;

    constructor(id: number, title: string) {
        this._id = id;
        this._title = title;
    }

    get id() {
        return this._id;
    }

//    set id(id: number) {
//        this._id = id;
//    }

    get title() {
        return this.title;
    }

    set title(title: string) {
        this._title = title;
    }
}

class Picture extends Item{
    public static photoOrientation = PhotoOrientation;
    //Propiedades
    private _orientation: PhotoOrientation;

    public constructor(id: number, 
                title: string, 
                orientation: PhotoOrientation) {

        //Para llamar a la superclase usamos la palabra super con sus respectivos valores que recibe            
        super(id, title)
        this._orientation = orientation;
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

class Album extends Item{
    private picture: Picture[];

    public constructor(id:number, title:string) {
        super(id, title) //Constructor de Superclase
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
console.log('picture.id', picture.id); //get id()

//picture.id = 100; //private, set id(100);
picture.title = 'Another Title'; //private
album.title = 'Personal Activities';//private
console.log ('album ', album);


//const item = new Item(1, 'Test Title'); //Da error porque Item es abstract
//console.log('item ', item);


//Probar el miembro estatico

console.log('PhoOrientation', Picture.photoOrientation.Landscape);

