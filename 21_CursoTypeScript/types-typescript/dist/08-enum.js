"use strict";
//Enum
//Los enumerados permiten definir un conjunto de constantes con nombre
//Tienen la ventaja de adaptarse al contexto de la aplicacion
//Orientacion para Fotografias
//Manera clasica en JS
//const landscape = 0;
//const portrait = 1;
//const square = 2;
//const panorama = 3;
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
const landscape = PhotoOrientation.Landscape;
console.log('landscape', landscape); //0
console.log('landscape', PhotoOrientation[landscape]); //landscape
var PictureOrientation;
(function (PictureOrientation) {
    PictureOrientation[PictureOrientation["Landscape"] = 10] = "Landscape";
    PictureOrientation[PictureOrientation["Portrait"] = 11] = "Portrait";
    PictureOrientation[PictureOrientation["Square"] = 12] = "Square";
    PictureOrientation[PictureOrientation["Panorama"] = 13] = "Panorama";
})(PictureOrientation || (PictureOrientation = {}));
console.log('portrait', PictureOrientation.Portrait); //11
var Country;
(function (Country) {
    Country["Bolivia"] = "bol";
    Country["Colombia"] = "col";
    Country["Mexico"] = "mex";
    Country["EEUU"] = "usa";
    Country["Venezuela"] = "ven";
})(Country || (Country = {}));
const country = Country.Colombia;
console.log('country', country); //col
