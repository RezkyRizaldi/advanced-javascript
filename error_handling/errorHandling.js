const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", async function () {
  try {
    const inputKeyword = document.querySelector(".input-keyword");
    const movies = await getMovies(inputKeyword.value);
    updateUI(movies);
  } catch (e) {
    alert(e);
  }
});

function getMovies(keyword) {
  return fetch(`http://www.omdbapi.com/?apikey=2ddbc676&s=${keyword}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((result) => {
      if (result.Response === "False") {
        throw new Error(result.Error);
      }
      return result.Search;
    });
}

function updateUI(movies) {
  let movie = "";
  movies.forEach((m) => (movie += showMovie(m)));
  const movieContainer = document.querySelector(".movie-container");
  movieContainer.innerHTML = movie;
}

// Event Binding
document.addEventListener("click", async function (e) {
  try {
    if (e.target.classList.contains("modal-detail-btn")) {
      const imdbID = e.target.dataset.imdbid;
      const movieDetail = await getMovieDetail(imdbID);
      updateUIDetail(movieDetail);
    }
  } catch (e) {
    alert(e);
  }
});

function getMovieDetail(imdbID) {
  return fetch(`http://www.omdbapi.com/?apikey=2ddbc676&i=${imdbID}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((m) => m);
}

function updateUIDetail(m) {
  const showMovieDetail = showMovieDetail(m);
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = showMovieDetail;
}

function showMovie(m) {
  return /*html*/ `<div class="col-md-4 my-5">
                      <div class="card">
                        <img class="card-img-top" src="${m.Poster}" alt="Movie Poster" />
                        <div class="card-body">
                          <h4 class="card-title">${m.Title}</h4>
                          <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                          <a href="#" class="btn btn-primary btn-lg modal-detail-btn" data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
                        </div>
                      </div>
                    </div>`;
}

function showMovieDetail(m) {
  return /*html*/ `<div class="container-fluid">
                    <div class="row">
                      <div class="col-md-3">
                        <img src="${m.Poster}" class="img-fluid" alt="Movie Poster" />
                      </div>
                      <div class="col-md">
                        <ul class="list-group">
                          <li class="list-group-item active">${m.Title} (${m.Year})</li>
                          <li class="list-group-item">Director: <strong>${m.Director}</strong></li>
                          <li class="list-group-item">Actors: <strong>${m.Actors}</strong></li>
                          <li class="list-group-item">Writer: <strong>${m.Writer}</strong></li>
                          <li class="list-group-item">
                            Plot: <strong><br />${m.Plot}</strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>`;
}
