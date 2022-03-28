//import {User, Album, Picture, PhotoOrientation} from './photo-app';

import { Album } from "./album";
import { PhotoOrientation } from "./photo-orientation";
import { Picture } from "./picture";
import { User } from "./user";

const user = new User(1, 'Anktor', 'Andres', true);
const album = new Album(10, 'Platzi Pictures');
const picture = new Picture(1, 'TS Course', '2022-03', PhotoOrientation.Landscape);

//Creamos relaciones

user.addAlbum(album);
album.addPicture(picture);

console.log('user ', user);

user.removeAlbum(album)
console.log('user', user);