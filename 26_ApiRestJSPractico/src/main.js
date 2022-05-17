/* 
// Primero trabajaremos con la seccion trending.

// Es importante aclarar que el HTML es la base pero toda la magia se hace aqui, para no pisar el CCS en ningun momento hay que tener cuidado llamar bien a las clases y a los id declarados en el HTML 



//Aqui hacemos la tipica de crear la funcion, hacer fetch a la api, tomar data con json y dentro de data tendremos a results que alli en donde trabajaremos
async function getTrendingMoviesPreview(){

    //  Datos curisoso de la api que consumimos para entender mejor:
    //     3: version que estamos trabajanado.
    //     trending: especificando que estamos dentro de trending. 
    //     movie: especificar que queremos son peliculas, no series u otra cosa.
    //     day: que se actualice diariamente (pudo ser semanal)
    const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY);
    const data = await res.json();
    const movies = data.results

    //Para cada movie interna crearemos HTML nuevo
    movies.forEach(movie => {
        
        //A diferencia de lo que esta abajo no estamos creando sino tomando lo que ya esta en el HTML (En este caso es el article dentro de SECCION TREDING)
        const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList')

        //Container div del HTML con su class
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        //el img con su class, su alt (titulo de la peli) y el src (imagen de la pelicula)
        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + movie.poster_path);

        //Metiendo el img dentro del div
        movieContainer.appendChild(movieImg)

        //metiendo el div dentro del article
        trendingPreviewMoviesContainer.appendChild(movieContainer);
    });
}

// Segunda parte: trabajando con las categorias 

// Esta parte no es muy diferente a la de arriba explicado paso a paso
async function getCategoriesPreview() {

    // La difencia con este api es que ahora llamamos a genre dentro a movie y dentro a list 
    const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=' + API_KEY);
    const data = await res.json();
    const categories = data.genres;

    //Creando HTML nuevo por cada categoria
    categories.forEach(category => {

        //llamamos a la clase dentro de article en la parte del HTML de SECCION DE CATEGORIAS DE TRENDING
        const previewCategoriesContainer = document.querySelector('#categoriesPreview .categoriesPreview-list');

        //creamos el div con su clase
        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');

        //creamos el h3 con su clase, le incluimos el id (dato curioso, dentro del CSS esta todos los id por colores por eso cuando llamemos al category.id cada uno tendra su color diferente)
        const categoryTitle = document.createElement('h3');
        categoryTitle.classList.add('category-title');
        categoryTitle.setAttribute('id', 'id' + category.id)
        //Genero de la categoria
        const categoryTitleText = document.createTextNode(category.name);

        //Metemos el texto dentro del h3
        categoryTitle.appendChild(categoryTitleText);

        //Metemos el h3 dentro del div
        categoryContainer.appendChild(categoryTitle);

        //Metemos del div dentro del article
        previewCategoriesContainer.appendChild(categoryContainer);
    });
}
getTrendingMoviesPreview();
getCategoriesPreview(); */



/*---------------------------------------------------------------------------------------------------------------------------------------------------------- */

//Comente toda la parte de arriba porque no quiero perder los datos previos sin usar axios

//Migracion a Axios

//esto es la declaracion base, es dar la url de la api, un header base con el que vamos a trabajar y el parametro que es la api-key.
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    params: {
        'api_key': API_KEY,
    }
    
})

//Utils

function createMovies(movies, container) {
    container.innerHTML = '';

    movies.forEach(movie => {
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        //Esto vino mucho despues, esto es para poder entrar en cada pelicula por su id
        movieContainer.addEventListener('click', () =>{
            location.hash = '#movie=' + movie.id;
        });

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + movie.poster_path);


        movieContainer.appendChild(movieImg)
        container.appendChild(movieContainer);
    });
}

function createCategories(categories, container) {
   
    container.innerHTML = "";

    categories.forEach(category => {

        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');

        const categoryTitle = document.createElement('h3');
        categoryTitle.classList.add('category-title');
        categoryTitle.setAttribute('id', 'id' + category.id)
        categoryTitle.addEventListener('click', () => {
            location.hash = `#category= ${category.id}-${category.name}`;
        })
        const categoryTitleText = document.createTextNode(category.name);

  
        categoryTitle.appendChild(categoryTitleText);

        categoryContainer.appendChild(categoryTitle);
        container.appendChild(categoryContainer);
    });
}

//Llamados a la API

async function getTrendingMoviesPreview(){

    const { data } = await api('trending/movie/day');
    const movies = data.results;

    createMovies(movies, trendingMoviesPreviewList);
}

async function getCategoriesPreview() {

    const { data } = await api('genre/movie/list');
    const categories = data.genres;

    createCategories(categories, categoriesPreviewList);
}

async function getMoviesByCategory(id) {
    const { data } = await api('discover/movie', {
        params: {
            with_genres: id,
        },
    });

    const movies = data.results;

    createMovies(movies, genericSection);
}

async function getMoviesBySearch(query) {
    const { data } = await api('search/movie', {
        params: {
            query,
        },
    });

    const movies = data.results;

    createMovies(movies, genericSection);
}

async function getTrendingMovies(){

    const { data } = await api('trending/movie/day');
    const movies = data.results;

    createMovies(movies, genericSection);
}

async function getMovieById(id){

    const { data: movie } = await api('movie/' + id);

    const movieImgUrl = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
    headerSection.style.background = `
    linear-gradient(
        180deg,
        rgba(0,0,0,0.35) 19.27%,
        rgba(0,0,0,0) 29.17%
    ),
    url(${movieImgUrl})
    `;

    movieDetailTitle.textContent = movie.title;
    movieDetailDescription.textContent = movie.overview;
    movieDetailScore.textContent = movie.vote_average;

    createCategories(movie.genres, movieDetailCategoriesList);

    getRelatedMoviesId(id);
}

async function getRelatedMoviesId(id) {
    const { data } = await api(`movie/${id}/recommendations`);
    const relatedMovies = data.results;

    createMovies(relatedMovies, relatedMoviesContainer);
}