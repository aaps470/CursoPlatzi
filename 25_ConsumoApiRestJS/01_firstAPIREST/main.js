console.log('Hello world');

const API_URL = 'https://api.thecatapi.com/v1/images/search';


//Aplicacion del profesor

/* fetch(URL)
    .then(res => res.json())
    .then(data => {
        const img = document.querySelector('img');
        img.src = data[0].url; 
    });

 */

//Reto de la clase usando async y await

/* Explicando paso por paso:
    1. fetch es una palabra reservada que lo que hace es hacer una solicitud a un servidor http. La informacion la meto en una constante (response).
    2. crea la constante data y lo que hace es recibir la informacion traida por fetch en un formato json.
    3. desde mi html cree una etiqueta img donde la traigo usando document.querySelector
    4. ya teniendo la constante  img le hago llamar al elemento src (fuente) donde redibira desde data el url asignado. */

async function reload() {
    const reponse = await fetch(API_URL);
    const data = await reponse.json();
    const img = document.querySelector('img');
    img.src = data[0].url;
}

reload();
//Aqui recargue la pagina para que apareciera una por defecto al principio


