// Data

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  params: {
    'api_key': API_KEY,
  },
});

/* Sistema para pasar a de string a objeto la pelicula que pases */
function likedMoviesList() {
  const item = JSON.parse(localStorage.getItem('liked_movies'));
  let movies;

  if(item) {
    movies = item;
  } else {
    movies = {}
  }

  return movies;
} 

/* Funcion para dar like a las peliculas, si tiene like se mete en un storage local */
function likeMovie(movie) {

  const likedMovies = likedMoviesList();

  console.log(likedMovies)

  if(likedMovies[movie.id]) {
    likedMovies[movie.id] = undefined;
  } else {
    likedMovies[movie.id] = movie;
  }

  localStorage.setItem('liked_movies', JSON.stringify(likedMovies));

  //Este if es para recargar la pagina cuando le das like o quitas el like a una pelicula
  if(location.hash == '') {
    homePage();
  }
}

// Utils
/* Funcion lazy Loader que lo que hace es no hacer que las imagenes no carguen todas a la vez, sino las visibles, es una forma de hacer mas optima el sitio web */
const lazyLoader = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      const url = entry.target.getAttribute('data-img',);
      entry.target.setAttribute('src', url);
    }
  });
});

function createMovies(
  movies, 
  container, 
  { 
    lazyLoad = false, 
    clean = true, 
  } = {},
  ) {

  if(clean) {
    container.innerHTML = '';
  }
  
  movies.forEach(movie => {
    const movieContainer = document.createElement('div');
    movieContainer.classList.add('movie-container');
    

    const movieImg = document.createElement('img');
    movieImg.classList.add('movie-img');
    movieImg.setAttribute('alt', movie.title);
    //preguntando si el lazy load es true
    movieImg.setAttribute(
      lazyLoad ? 'data-img' : 'src',
      'https://image.tmdb.org/t/p/w300' + movie.poster_path,
    );
    movieImg.addEventListener('click', () => {
      location.hash = '#movie=' + movie.id;
    });
    
    //Esta funcion es para cuando una imagen no carga
    movieImg.addEventListener('error', () =>{
      movieImg.setAttribute(
        'src',
        'https://static.platzi.com/static/images/error/img404.png')
    });

    //Corazon de Like en cada movie
    const movieBtn = document.createElement('button');
    movieBtn.classList.add('movie-btn');
    likedMoviesList()[movie.id] && movieBtn.classList.add('movie-btn--liked')
    movieBtn.addEventListener('click', () => {
      movieBtn.classList.toggle('movie-btn--liked')
      likeMovie(movie);
    })
    
   //Llamando al Lazy Loader para cada peli creada
   if(lazyLoad) {
    lazyLoader.observe(movieImg);
   }
    
    movieContainer.appendChild(movieImg);
    movieContainer.appendChild(movieBtn);
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
    categoryTitle.setAttribute('id', 'id' + category.id);
    categoryTitle.addEventListener('click', () => {
      location.hash = `#category=${category.id}-${category.name}`;
    });
    const categoryTitleText = document.createTextNode(category.name);

    categoryTitle.appendChild(categoryTitleText);
    categoryContainer.appendChild(categoryTitle);
    container.appendChild(categoryContainer);
  });
}

// Llamados a la API

async function getTrendingMoviesPreview() {
  const { data } = await api('trending/movie/day');
  const movies = data.results;
  console.log(movies)

  createMovies(movies, trendingMoviesPreviewList, true);
}

async function getCategegoriesPreview() {
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
  
  //El maxPage es para hacer el scroll infinito
  maxPage = data.total_pages;

  createMovies(movies, genericSection, { lazyLoad: true });
}

/* INFINITE SCROLLING POR CATEGORIAS */
function getPaginatedMoviesByCategory(id) {
  return async function () {
    /*
    scrollTop: es la cantidad de scroll que hemos hecho.
    clientHeight: es el tamaño de pantalla del cliente.
    scrollHeight: es el scroll total que se puede realizar en la pagina.
  */
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  const scrollIsBottom = (scrollTop + clientHeight) >= (scrollHeight - 15) /* Porque -15?  porque no es exacto la cantidad de pixels cuando lleguemos a lo mas abajo, asi que le restamos 15 para tener algo mucho mas cercano*/
  
  const pageIsNotMax = page < maxPage;

  if (scrollIsBottom && pageIsNotMax) {
    page++;
    const { data } = await api('discover/movie', {
      params: {
        with_genres: id,
        page,
      },
    });
    const movies = data.results;
  
    createMovies(movies, genericSection, { lazyLoad: true, clean: false});
    }
  }
}

async function getMoviesBySearch(query) {
  const { data } = await api('search/movie', {
    params: {
      query,
    },
  });
  const movies = data.results;
  maxPage = data.total_pages;

  createMovies(movies, genericSection);
}

/* INFINITE SCROLLING PARA LA BARRA DE BUSQUEDA*/
function getPaginatedMoviesBySearch(query) {
  return async function () {
    /*
    scrollTop: es la cantidad de scroll que hemos hecho.
    clientHeight: es el tamaño de pantalla del cliente.
    scrollHeight: es el scroll total que se puede realizar en la pagina.
  */
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  const scrollIsBottom = (scrollTop + clientHeight) >= (scrollHeight - 15) /* Porque -15?  porque no es exacto la cantidad de pixels cuando lleguemos a lo mas abajo, asi que le restamos 15 para tener algo mucho mas cercano*/
  
  const pageIsNotMax = page < maxPage;

  if (scrollIsBottom && pageIsNotMax) {
    page++;
    const { data } = await api('search/movie', {
      params: {
        query,
        page,
      },
    });
    const movies = data.results;
  
    createMovies(movies, genericSection, {lazyLoad: true, clean: false});
  }
 
  /* Esto era para crear un boton y hacer scroll hacia abajo, pero ya no lo necesitamos */
  // const btnLoadMore = document.createElement('button');
  // btnLoadMore.innerText = 'Cargar mas';
  // btnLoadMore.addEventListener('click', getPaginatedTrendingMovies);
  // genericSection.appendChild(btnLoadMore);
  }
}

async function getTrendingMovies() {
  const { data } = await api('trending/movie/day');
  const movies = data.results;

  maxPage = data.total_pages;

  createMovies(movies, genericSection, {lazyLoad: true, clean: true});

  // const btnLoadMore = document.createElement('button');
  // btnLoadMore.innerText = 'Cargar mas';
  // btnLoadMore.addEventListener('click', getPaginatedTrendingMovies);
  // genericSection.appendChild(btnLoadMore);
}

/* SCROLL INFINITO  PARA EL TRENDING*/

async function getPaginatedTrendingMovies() {

  /*
    scrollTop: es la cantidad de scroll que hemos hecho.
    clientHeight: es el tamaño de pantalla del cliente.
    scrollHeight: es el scroll total que se puede realizar en la pagina.
  */
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  const scrollIsBottom = (scrollTop + clientHeight) >= (scrollHeight - 15) /* Porque -15?  porque no es exacto la cantidad de pixels cuando lleguemos a lo mas abajo, asi que le restamos 15 para tener algo mucho mas cercano*/
  
  const pageIsNotMax = page < maxPage;

  if (scrollIsBottom && pageIsNotMax) {
    page++;
    const { data } = await api('trending/movie/day', {
      params: {
        page,
      },
    });
    const movies = data.results;
  
    createMovies(movies, genericSection, {lazyLoad: true, clean: false});
  }
 
  /* Esto era para crear un boton y hacer scroll hacia abajo, pero ya no lo necesitamos */
  // const btnLoadMore = document.createElement('button');
  // btnLoadMore.innerText = 'Cargar mas';
  // btnLoadMore.addEventListener('click', getPaginatedTrendingMovies);
  // genericSection.appendChild(btnLoadMore);
}

async function getMovieById(id) {
  const { data: movie } = await api('movie/' + id);

  const movieImgUrl = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
  console.log(movieImgUrl)
  headerSection.style.background = `
    linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.35) 19.27%,
      rgba(0, 0, 0, 0) 29.17%
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

function getLikedMovies() {
  const likedMovies = likedMoviesList();
  const moviesArray = Object.values(likedMovies)
  
  createMovies(moviesArray, likedMoviesListArticle, {lazyLoad: true, clean: true});


}