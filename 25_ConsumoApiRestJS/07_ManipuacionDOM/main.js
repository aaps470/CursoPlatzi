/*Aqui hay muchisimos cambios y hay que verlos con mucha calma, cambios desde el HTML como en el CSS como aqui en JS y los explicare paso a paso:

Paso 1: se extendio un else en loadFavoritesMichis que aqui es manipulacion del DOM completamente, primero se verifica en el if si el status es 200, que funciona y si funciona bueno creo un data.forEach(michi) para extraer la url, que es lo que necesito.
por cada url que extraigo le creo una section, un article, un img, y un boton y por su puesto extraigo la url y la pongo dentro de src de img y ya despues gracias a los comando meto cada elemento dentro del otro usando appendChild

Paso 2: llamo a los botones creados en el HTML con el getElementbyId y los llamo usando el onclick (importante: tengo que ponder el saveFavoritesMichis en un arrow function para que funcione el onclick, sino llamaban a las dos en vez de a una.) y les envio el id de la imagen que tengo en el momento

Paso  3: en la funcion saveFavoritesMichis les envio una ip que es la que consigo haciendo el onclick de los btns en loadRandom michis*/

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
    
    //Paso 2:
    } else {
        const img1 = document.getElementById('img1');
        const img2 = document.getElementById('img2');
        const btn1 = document.getElementById('btn1');
        const btn2 = document.getElementById('btn2');
    
        img1.src = data[0].url;
        img2.src = data[1].url;

        btn1.onclick = () => saveFavoriteMichis(data[0].id);
        btn2.onclick = () => saveFavoriteMichis(data[1].id);
    }
}


async function loadFavoritesMichis() {
    const response = await fetch(API_URL_FAVORITES);
    const data = await response.json();
    console.log('Favoritos');
    console.log(data);


    if (response.status !== 200) {
        spanError.innerHTML = "Hubo un error: " + response.status + data.message;

    //Paso1:
    } else {
        data.forEach(michi => {
            const section = document.getElementById('favoriteMichis');
            const article = document.createElement('article');
            const img = document.createElement('img');
            const btn = document.createElement('button');
            const btnText = document.createTextNode('Sacar al michi de favoritos');
            
            img.src = michi.image.url;
            btn.appendChild(btnText);
            article.appendChild(img);
            article.appendChild(btn);
            section.appendChild(article)
        });
    }
}

//paso 3:
async  function saveFavoriteMichis(id) {

    const response = await fetch(API_URL_FAVORITES, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
            image_id: id
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