const moviesContainer = document.getElementById('movies-container')

let movies = []

function loadFromLocalStorage(){
    const moviesStr = localStorage.getItem("watchlist")
    if(moviesStr){
        movies = JSON.parse(moviesStr)
        if (movies.length){
            renderMovies()
            addEventListenerToMovies()
        }
    }
     
}

function renderMovies(){
    let html = ''
    
    if(movies.length){
        movies.forEach(movie => {
            html += 
            `<section class="movie flex">
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
                                  <img src="images/minus-icon.svg" alt="minus icon" data-id="${movie.imdbID}">
                                  <p data-id="${movie.imdbID}">Remove</p>
                      </button>
                  </div>
                  <p class="movie-description">${movie.Plot}</p>
              </article>
            </section>
            <hr>`
        })
    }else{
        html= `<p class="empty-watchlist-text">Your watchlist is looking a little empty...</p>
            <a href="index.html" class="gap05em flex">
                <img src="images/plus-icon.svg" alt="plus icon">
                <p class="add-movies-text">Let's add some movies!</p>
            </a>`
    }
    moviesContainer.innerHTML = html
}

function addEventListenerToMovies(){
    const watchlistButtons = document.getElementsByClassName("movie-watchlist")
    for (const watchlistButton of watchlistButtons) {
        watchlistButton.addEventListener("click", removeFromWatchlist)
    }
}

function removeFromWatchlist(event){
    if (event.target.dataset.id){
        const movieIndex = movies.map(movie => movie.imdbID).indexOf(event.target.dataset.id)
        console.log(movieIndex)
        movies.splice(movieIndex,1)
        localStorage.setItem("watchlist", JSON.stringify(movies))
        renderMovies()
        addEventListenerToMovies()
    }    
}

loadFromLocalStorage()