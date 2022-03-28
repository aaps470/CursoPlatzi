//Extendiendo Interfaces

/*Las interfaces pueden extenderse unas de otras. Esto permite copiar los miembros ya definidos en una interfaz a otra, ganando flexibilidad y reusabilidad de componentes. */

export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

interface Entity {
    id: number;
    title: string;
}

interface Album extends Entity{
    //Copia de los atributos de Entity
    description: string;
}

interface Picture extends Entity{
   //copia de los atributos de Entity
    orientation: PhotoOrientation;
}

const album: Album = {
    id: 1,
    title: 'Meetups',
    description: 'Community events around the world'
};

const picture: Picture = {
    id: 2,
    title: 'Family',
    orientation: PhotoOrientation.Landscape
};

let newPicture = {} as Picture
newPicture.id = 3;
newPicture.title = 'Moon';

console.log('album ', album);
console.log('picture ', picture)
console.log('newPicture ', newPicture);


