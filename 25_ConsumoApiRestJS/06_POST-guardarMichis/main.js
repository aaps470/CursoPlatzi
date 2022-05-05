/*Siempre hay mucho que contar y aqui contare los pasos nuevos:

Paso 1: Se creo la funcion saveFavoritesMichis

Paso 2: Desde el HTML en los botones al lado de las imagenes random que tenemos  agregamos un id para cada boton y un onclick para llamar a la funcion saveFavoritesMichis

Paso 3: Aqui empieza lo divertido, para poder usar la opcion save (que es guardar la foto del michi) hay ciertas cosas que tenemos que especificar.
Primero es que usamos la misma URL_FAVORITES pero hay otras cosas, como por ejemplo el metodo que vamos a implementar, el header que querramos usar y el body usando JSON.stringify (esto lo que hace es que no importa el lenguaje de programacion, esto es lo que estoy buscando), que en este caso es el id de la imagen que eso es lo que queremos guarfar en favoritos.*/

const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=f4cce7d4-e5f0-4576-a8f7-d76cd6107fcb';

const API_URL_FAVORITES = 'https://api.thecatapi.com/v1/favourites?api_key=f4cce7d4-e5f0-4576-a8f7-d76cd6107fcb';


const spanError =  document.getElementById('error');

async function loadRandomMichis() {
    const response = await fetch(API_URL_RANDOM);
    const data = await response.json();
    console.log('Random');
    console.log(data);


    if (response.status !== 200) {
        spanError.innerHTML = "Hubo un error: " + response.status + data.message;
    } else {
        const img1 = document.getElementById('img1');
        const img2 = document.getElementById('img2');
    
        img1.src = data[0].url;
        img2.src = data[1].url;
    }
}


async function loadFavoritesMichis() {
    const response = await fetch(API_URL_FAVORITES);
    const data = await response.json();
    console.log('Favoritos');
    console.log(data);


    if (response.status !== 200) {
        spanError.innerHTML = "Hubo un error: " + response.status + data.message;
    }
}

//Paso 1:
async  function saveFavoriteMichis() {
    //Paso 3:
    const response = await fetch(API_URL_FAVORITES, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
            image_id: 'dje'
        }),
    });
    const data = await response.json();

    console.log('Save');
    console.log(response)

    if (response.status !== 200) {
        spanError.innerHTML = "Hubo un error: " + response.status + data.message;
    }
}

loadRandomMichis();
loadFavoritesMichis();