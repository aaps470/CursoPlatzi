"use strict";
//Clases: Miembros Privados
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
        this.id = id;
        this.title = title;
        this.orientation = orientation;
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
        this.id = id;
        this.title = title;
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
//picture.id = 100; //Error porque es privado
//picture.title = 'Another Title'; //Error
//album.title = 'Personal Activities';//Error
console.log('album ', album);
