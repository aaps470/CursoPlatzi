"use strict";
//Clases: Metodos Set y Get
/*TS soporta los metodos accesores set y get como una forma de interceptar los accesos a los miembros provados de un objeto*/
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
class Picture {
    constructor(id, title, orientation) {
        this._id = id;
        this._title = title;
        this._orientation = orientation;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get title() {
        return this.title;
    }
    set title(title) {
        this._title = title;
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
class Album {
    constructor(id, title) {
        this._id = id;
        this._title = title;
        this.picture = [];
    }
    addPicture(picture) {
        this.picture.push(picture);
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get title() {
        return this.title;
    }
    set title(t) {
        this._title = t;
    }
}
const album = new Album(1, 'Personal Pictures');
const picture = new Picture(1, 'Platzi Session', PhotoOrientation.Square);
album.addPicture(picture);
console.log('album ', album);
//Accediendo a los miembros publicos
console.log('picture.id', picture.id); //get id()
picture.id = 100; //private, set id(100);
picture.title = 'Another Title'; //private
album.title = 'Personal Activities'; //private
console.log('album ', album);
