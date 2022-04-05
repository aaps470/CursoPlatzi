//Librerias que soportan TS

//Datos interesantes: esta clase es exclusivamente al uso de librerias externas
/*En este caso se uso la libreria 'date-fns' que se consigue en date-fns.org
se usa para manipulacion de fechas */

//subDays es una resta, abajo indique en rta que a la fecha dada en date se le reste 30 dias

//y en format lo que le digo es la forma en que quiero que la ponga.

import { subDays, format } from 'date-fns';


const date = new Date(1998, 1, 28); //0 = enero,  1 = febrero

const rta = subDays(date, 30);
const str = format(rta, 'yyyy/MM/dd');
const str2 = format(rta, 'dd/MM/yyyy');

console.log(str);

console.log(str2);

