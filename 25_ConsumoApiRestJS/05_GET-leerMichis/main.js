/* Aqui hay muchas cosas que contar: explicare paso por paso que ocurrio 

Paso 1: Se creo una url de favoritos que ofrece la API con la que se esta trabajando pero esta parte de la API tiene algo en especial, no se puede acceder a ella a menos que tengas una api_key

Paso 2: Se creo un mensaje de span tanto en el html con el "id = error" como aqui en el JS

Paso 3: Se creo un condicional de status (status es un parametro que viene por defecto en la URL usada), la pregunta es: si no eres diferente de 200 (200 quiere decir que todo esta ok, cualquier cosa fuera de eso es error nuestro o del servidor) el span creado te lanzara un mensaje de error monstrando el status dado. */


const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=f4cce7d4-e5f0-4576-a8f7-d76cd6107fcb';

//Paso 1:
const API_URL_FAVORITES = 'https://api.thecatapi.com/v1/favourites?limit=2&api_key=f4cce7d4-e5f0-4576-a8f7-d76cd6107fcb';

//Paso 2:
const spanError =  document.getElementById('error');

async function loadRandomMichis() {
    const response = await fetch(API_URL_RANDOM);
    const data = await response.json();
    console.log('Random');
    console.log(data);

    //Paso 3:
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

    //Paso 3:
    if (response.status !== 200) {
        spanError.innerHTML = "Hubo un error: " + response.status + data.message;
    }
}

loadRandomMichis();
loadFavoritesMichis();

/*El paso 3 se ve mucho mas claro en el loadFavoritesMichis porque esta por abligacion nos pide un api_key, si quitamos la llave nos manda un error 401 (necesitas autenticacion para acceder)  */