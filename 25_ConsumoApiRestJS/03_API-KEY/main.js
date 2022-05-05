/* API keys: son un metodo de autenticacion util para indentificar quien esta haciendo la slicitud a los endpoints de una API.

Es importante hacer la distincion entre autenticacion y autorizacon.

Autenticacion: Quien eres?
Autorizacion: Que puedes hacer?*/

const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=3&api_key=f4cce7d4-e5f0-4576-a8f7-d76cd6107fcb';

//Aqui en esta clase yo cree una API key desde la pagina de thecatapi.com, el api key esta escrito en la url de arriba.

async function reload() {
    const reponse = await fetch(API_URL);
    const data = await reponse.json();

    console.log(data)
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');
    
    img1.src = data[0].url;
    img2.src = data[1].url;
    img3.src = data[2].url;
}

reload();