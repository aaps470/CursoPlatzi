/*  EndPoint: Es una ubicacion digital por la cual una API recibe        peticiones para acceder a un recurso en el servidor.
    Tipicamente es una URL que provee la ubicacion de un recurso especifico 

por ejemplo: "/images/search" son EndPoints

    Query Parameters: son una extension de unas URLs que se utilizan en las peticiones a una API.
    Estos se especifican luego de un ? y los podemos separar con el signo &
    
por ejemplo /search?limit=3*/

const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=3';


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