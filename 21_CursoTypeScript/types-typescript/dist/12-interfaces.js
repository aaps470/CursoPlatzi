"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
//Con interface defino todo los tipos de variables que voy a usar y simplemente lo llamo dentro el objeto
function showPicture(picture) {
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
});
const generatePicture = (config) => {
    const pic = { title: 'Default', date: '2020-03' };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
};
let picture = generatePicture({});
console.log('picture', picture);
picture = generatePicture({
    title: 'Travel Pic'
});
console.log('picture', picture);
picture = generatePicture({
    title: 'Travel Pic',
    date: '2022-03',
});
console.log('picture', picture);
let user;
user = { id: 10, username: 'Anktor', isPro: true };
console.log('user', user);
user.username = 'paparazzi';
//user.id = 20; //Error porque al estar marcada como readonly no se puede modificar su contenido luego de ser definida.
console.log('user ', user);
