const searchBox = document.getElementById("movie-search");
const moviesContainer = document.getElementById("movies-container");
const API_KEY = "d790acf6";

let movies = []
async function submitHandler(event) {
  event.preventDefault();

  const querry = searchBox.value;
  if (querry) {

    const findAllMovies = await (
      await fetch(`https://www.omdbapi.com/?s=${querry}&apikey=${API_KEY}`)
    ).json();

    // Might return empty array, meaning it didn't find any movies containing what was written in their name
    if (!findAllMovies.Search) {
        moviesContainer.innerHTML = `<p>Unable to find what you're looking for. Please try another search.</p>`;
      return;
    }

    movies = await Promise.all(
      findAllMovies.Search.map(async (result) => {
        const movieData = await (
          await fetch(
            `https://www.omdbapi.com/?t=${result.Title}&apikey=${API_KEY}`
          )
        ).json();
        
        return movieData;
      })
    );
    renderMovies()
    const watchlistButtons = document.getElementsByClassName("movie-watchlist")
    for (const watchlistButton of watchlistButtons) {
        watchlistButton.addEventListener("click", addToWatchList)
    }
  }
}

function renderMovies(){
    let html = ''
    movies.forEach(movie =>{
        html += `
        <section class="movie flex">
              <img class="movie-cover-image" src="${movie.Poster}" alt="${movie.Title} Poster">
              <article>
                  <div class="movie-title-rating flex">
                      <h1 class="movie-title">${movie.Title}</h1>
                      <div class="movie-rating-container flex">
                          <img src="images/star-icon.svg" alt="star icon">
                          <p class="movie-rating">${movie.imdbRating}</p>
                      </div> 
                  </div>
                  <div class="movie-length-genres-watchlist flex">
                      <p class="movie-length">${movie.Runtime}</p>
                      <p class="movie-genre">${movie.Genre}</p>
                      <button class="movie-watchlist flex" data-id="${movie.imdbID}">
                                  <img src="images/plus-icon.svg" alt="plus icon" data-id="${movie.imdbID}">
                                  <p data-id="${movie.imdbID}">Watchlist</p>
                      </button>
                  </div>
                  <p class="movie-description">${movie.Plot}</p>
              </article>
          </section>
          <hr>
      `;
    })
   
    moviesContainer.innerHTML = html;
}

function addToWatchList(event){
  if (event.target.dataset.id){
    const correspondingMovieObj = movies.find(movie => movie.imdbID === event.target.dataset.id)

    if(!localStorage.getItem("watchlist")){
      localStorage.setItem("watchlist",JSON.stringify(new Array(correspondingMovieObj)))
    }else{
      let savedMovies = []
      savedMovies = JSON.parse(localStorage.getItem("watchlist"))
      if(!savedMovies.some(movie => movie.Title === correspondingMovieObj.Title)){
        savedMovies.push(correspondingMovieObj)
        localStorage.setItem("watchlist", JSON.stringify(savedMovies))
      }
    }
  }
}

document.addEventListener("submit", submitHandler);
