//* Fetch
//? Sebuah API pada Advanced JavaScript yang berfungsi untuk mengambil data secara asynchronous dan me-return sebuah Promise.

// Example
// const searchButton = document.querySelector(".search-button");
// searchButton.addEventListener("click", function () {
//   const inputKeyword = document.querySelector(".input-keyword");
//   fetch(`http://www.omdbapi.com/?apikey=2ddbc676&s=${inputKeyword.value}`)
//     .then((response) => response.json())
//     .then((result) => {
//       const movies = result.Search;
//       let movie = "";
//       movies.forEach((m) => (movie += showMovie(m)));
//       const movieContainer = document.querySelector(".movie-container");
//       movieContainer.innerHTML = movie;
//       const modalDetailButton = document.querySelectorAll(".modal-detail-btn");
//       modalDetailButton.forEach((btn) => {
//         btn.addEventListener("click", function () {
//           const imdbID = imdb.dataset.imdbid;
//           fetch(`http://www.omdbapi.com/?apikey=2ddbc676&i=${imdbID}`)
//             .then((response) => response.json())
//             .then((m) => {
//               const showMovieDetail = showMovieDetail(m);
//               const modalBody = document.querySelector(".modal-body");
//               modalBody.innerHTML = showMovieDetail;
//             });
//         });
//       });
//     });
// });

// Refactoring Code
const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", async function () {
  const inputKeyword = document.querySelector(".input-keyword");
  const movies = await getMovies(inputKeyword.value);
  updateUI(movies);
});

// Event Binding
document.addEventListener("click", async function (e) {
  if (e.target.classList.contains("modal-detail-btn")) {
    const imdbID = e.target.dataset.imdbid;
    const movieDetail = await getMovieDetail(imdbID);
    updateUIDetail(movieDetail);
  }
});

function getMovieDetail(imdbID) {
  return fetch(`http://www.omdbapi.com/?apikey=2ddbc676&i=${imdbID}`)
    .then((response) => response.json())
    .then((m) => m);
}

function updateUIDetail(m) {
  const showMovieDetail = showMovieDetail(m);
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = showMovieDetail;
}

function getMovies(keyword) {
  return fetch(`http://www.omdbapi.com/?apikey=2ddbc676&s=${keyword}`)
    .then((response) => response.json())
    .then((result) => result.Search);
}

function updateUI(movies) {
  let movie = "";
  movies.forEach((m) => (movie += showMovie(m)));
  const movieContainer = document.querySelector(".movie-container");
  movieContainer.innerHTML = movie;
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
