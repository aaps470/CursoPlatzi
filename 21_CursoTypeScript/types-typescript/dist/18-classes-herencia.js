"use strict";
// Herencia de clases y miembros protegidos
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
//SUPERclase
class Item {
    constructor(id, title) {
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
    set title(title) {
        this._title = title;
    }
}
class Picture extends Item {
    constructor(id, title, orientation) {
        //Para llamar a la superclase usamos la palabra super con sus respectivos valores que recibe            
        super(id, title);
        this._orientation = orientation;
    }
    get orientation() {
        return this._orientation;
    }
    set orientation(o) {
        this._orientation = o;
    }
    // Comportamiento
    toString() {
        return `[id: ${this.id},
                 title: ${this.title},
                 orientation: ${this.orientation}]`;
    }
}
Picture.photoOrientation = PhotoOrientation;
class Album extends Item {
    constructor(id, title) {
        super(id, title); //Constructor de Superclase
        this.picture = [];
    }
    addPicture(picture) {
        this.picture.push(picture);
    }
}
const album = new Album(1, 'Personal Pictures');
const picture = new Picture(1, 'Platzi Session', PhotoOrientation.Square);
album.addPicture(picture);
console.log('album ', album);
//Accediendo a los miembros publicos
console.log('picture.id', picture.id); //get id()
//picture.id = 100; //private, set id(100);
picture.title = 'Another Title'; //private
album.title = 'Personal Activities'; //private
console.log('album ', album);
//const item = new Item(1, 'Test Title'); //Da error porque Item es abstract
//console.log('item ', item);
//Probar el miembro estatico
console.log('PhoOrientation', Picture.photoOrientation.Landscape);
