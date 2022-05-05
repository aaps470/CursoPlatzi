/*Cositas que comentar por aqui:

Paso 1: en el HTML se  creo la section de uploadMichi que  lo importante es lo que contiene dentro, un form con el id uploadingForm dentro de este contiene un input y un button que es donde estara la magia aqui en el JS 

Paso 2: se creo la funcion upploadMichiPhoto que dentro es lo importante, se llamo al id de uploadingForm y se metio en la constante form. Se creo un new formData (es una clase ya dentro de JS para subir archivos) que le pasamos nuestro id del form ya creado en el HTML.

*/

const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=f4cce7d4-e5f0-4576-a8f7-d76cd6107fcb';

const API_URL_FAVORITES = 'https://api.thecatapi.com/v1/favourites?';

const API_URL_FAVORITES_DELETE = (id) =>`https://api.thecatapi.com/v1/favourites/${id}`;

const API_URL_UPLOAD = 'https://api.thecatapi.com/v1/images/upload';

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
    const response = await fetch(API_URL_FAVORITES, {
        //PASO 1:
        headers: {
            'X-API-KEY': 'f4cce7d4-e5f0-4576-a8f7-d76cd6107fcb',
        },
    });
    const data = await response.json();
    console.log('Favoritos');
    console.log(data);


    if (response.status !== 200) {
        spanError.innerHTML = "Hubo un error: " + response.status + data.message;

    } else {

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
            'X-API-KEY': 'f4cce7d4-e5f0-4576-a8f7-d76cd6107fcb',
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
        loadFavoritesMichis();
    }
}

async function deleteFavoritesMichis (id) {
    const response = await fetch(API_URL_FAVORITES_DELETE(id), {
        method: 'DELETE',
        headers: {
            'X-API-KEY': 'f4cce7d4-e5f0-4576-a8f7-d76cd6107fcb',
        },
    });
    const data = await response.json();

    if (response.status !== 200) {
        spanError.innerHTML = "Hubo un error: " + response.status + data.message;
    } else {
        console.log('Michi eliminado de favoritos');
        loadFavoritesMichis();
    }
}

//PASO 2:
async function uploadMichiPhoto() {
    const form = document.getElementsById('uploadingForm');
    const formData = new FormData(form);

    console.log(formData.get('file'));

    const response = await fetch(API_URL_UPLOAD, {
        method: 'POST',
        headers: {
            //'Content-Type': 'multipart/form-data',
            'X-API-KEY': 'f4cce7d4-e5f0-4576-a8f7-d76cd6107fcb',
        },
        body: formData,
    })
    const data = await response.json();

    if (response.status !== 201) {
        spanError.innerHTML = "Hubo un error: " + response.status + data.message;
    } else {
        console.log('Foto de michi subida');
        console.log({data})
        console.log(data.url)
        saveFavoriteMichis(data.id);
    }

}

loadRandomMichis();
loadFavoritesMichis();