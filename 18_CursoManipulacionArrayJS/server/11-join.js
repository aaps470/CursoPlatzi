//El metodo join() une todos los elementos de un array en una cadena y devuelve esta cadena. Podemos pasarle cualquier elemento como separador que deseemos.

//Y el método split() divide un objeto de tipo String en un array de cadenas mediante la separación de la cadena en sub-cadenas.

const elements = ['Fire', 'Air', 'Water'];

//Aplicando for para poner -- entre los elementos del string

let rtaFinal = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator;
}

console.log('Con for', rtaFinal);

//vs

//Aplicando join()
//OJO: aqui tampoco necesito arrow function, solo ponemos lo que querramos poner

const rta = elements.join('--');
console.log('Con join', rta);


//Aplicando split()

const title = 'Curso de manipulacion de arrays';

const titleFinal = title.split(' ').join('-').toLowerCase();
console.log(titleFinal);

//Explicando por partes: split tomara el string y con lo que hayamos puesto dentro de split (que en este caso es un espacio) lo convierte en un array

//[Curso, de, manipulacion, de, arrays] esto fue lo que hizo split.

//Con join simplemente tome el array creado por split y lo convierte en un string pero con un '-' de separacion.

//y con toLowerCase simplemente convierte todas las letras mayusculas en minusculas.
