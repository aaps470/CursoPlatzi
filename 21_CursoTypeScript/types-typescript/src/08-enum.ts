//Enum

//Los enumerados permiten definir un conjunto de constantes con nombre
//Tienen la ventaja de adaptarse al contexto de la aplicacion


//Orientacion para Fotografias


//Manera clasica en JS

//const landscape = 0;
//const portrait = 1;
//const square = 2;
//const panorama = 3;



enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log('landscape', landscape); //0
console.log('landscape', PhotoOrientation[landscape]); //landscape

enum PictureOrientation {
    Landscape = 10,
    Portrait,
    Square,
    Panorama
}

console.log('portrait', PictureOrientation.Portrait); //11

enum Country {
    Bolivia = 'bol',
    Colombia = 'col',
    Mexico = 'mex',
    EEUU = 'usa',
    Venezuela = 'ven'
}

const country: Country = Country.Colombia;
console.log('country', country); //col