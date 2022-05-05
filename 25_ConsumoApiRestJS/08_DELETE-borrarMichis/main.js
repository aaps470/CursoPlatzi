/* Otra vez ocurrieron muchas cosas y aqui estan puestas paso a paso:

Paso 1: Se creo la API_URL_DELETE para poder eliminar un michi de favoritos, pero tiene truco esta nueva constante creada, primero se usaron (`) en vez de comilla simple para concatenar un ${id}, para que es esto? bueno porque para eliminar un michi hay que pasarles es exactamente la url, asi que convirtiendo API_DELETE en un arrow function y pasandole un id queda perfecto

Paso 2: se creo la function de  deleteFavoritesMichis que recibe un id y ese id es el que se le pasara a API_DELETE y el method paso a ser DELETE

Paso 3: en loadFavorites Michis se creo un evento btn.onclick que llama a la function deleteFavoritesMichis donde se le pasa el id de la imagen

Paso 4: Saque la section de forEach y ahora esta como parte principal de loadFaovitesMichis y alli se ira guardando cada michi favorito y a partir de alli se empezo a manipular el DOM para crear nuevos elementos html dentro del JS.

Paso 5: al final de saveFavoriteMichis y deleteFavoriteMichis hice llamar loadFavoriteMichis para que la pagina se recargara sola y no tener que hacerlo manualmente.
*/

const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=f4cce7d4-e5f0-4576-a8f7-d76cd6107fcb';

const API_URL_FAVORITES = 'https://api.thecatapi.com/v1/favourites?api_key=f4cce7d4-e5f0-4576-a8f7-d76cd6107fcb';

const API_URL_FAVORITES_DELETE = (id) =>`https://api.thecatapi.com/v1/favourites/${id}?api_key=f4cce7d4-e5f0-4576-a8f7-d76cd6107fcb`;


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

    } else {

        //PASO 4:
        const section = document.getElementById('favoriteMichis');
        section.innerHTML = "";
        const h2 = document.createElement('h2');
        const h2Text = document.createTextNode('Michis favoritos');
        const div = document.createElement('div');
        h2.appendChild(h2Text);
        section.appendChild(h2);
        section.appendChild(div);

        data.forEach(michi => {
            
            const article = document.createElement('article');
            const img = document.createElement('img');
            const btn = document.createElement('button');
            const btnText = document.createTextNode('Sacar al michi de favoritos');
            
            img.src = michi.image.url;
            btn.appendChild(btnText);
            //PASO 3:
            btn.onclick = () => deleteFavoritesMichis(michi.id);
            article.appendChild(img);
            article.appendChild(btn);
            div.appendChild(article)
        });
    }
}

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
    } else {
        console.log('Michi guardado en favoritos');
        //PASO  5:
        loadFavoritesMichis();
    }
}

//PASO 2:
async function deleteFavoritesMichis (id) {
    const response = await fetch(API_URL_FAVORITES_DELETE(id), {
        method: 'DELETE',
    });
    const data = await response.json();

    if (response.status !== 200) {
        spanError.innerHTML = "Hubo un error: " + response.status + data.message;
    } else {
        console.log('Michi eliminado de favoritos');
        //PASO 5:
        loadFavoritesMichis();
    }
}

loadRandomMichis();
loadFavoritesMichis();