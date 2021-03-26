//* Asynchronous
//? Tekniknya mencakup callback, Promise, Ajax, async & await
//? Sifat JavaScript adalah Single-threaded, Non-blocking, Asynchronous, dan

//? Single-threaded berarti hanya dapat mengeksekusi satu kode dalam satu waktu
//? Non-blocking berarti walaupun pengeksekusian suatu kode belum selesai tetapi dapat mengeksekusi kode yang lain (IO related)
//? Asynchronous berarti walaupun pengeksekusian suatu kode belum selesai tetapi dapat mengeksekusi kode yang lain (HTTP Request related)

//* Callback
//? Function yang dikirimkan sebagai parameter pada function yang lain. -MDN (https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
//? Sebuah function yang dieksekusi setelah fungsi lain selesai dijalankan. -Codeburst (https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced)

//* Synchronous Callback
// // function hello(name) {
// //   alert(`Halo, ${name}!`);
// // }

// function show(callback) {
//   const name = prompt("Masukkan Nama:");
//   callback(name);
// }

// show((name) => alert(`Halo, ${name}`));

//* Asynchronous Callback (AJAX with Vanilla JavaScript)
// function getStudent(url, success, err) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         err();
//       }
//     }
//   };

//   xhr.open("GET", url);
//   xhr.send();
// }

// getStudent(
//   "data/student.json",
//   (result) => {
//     const std = JSON.parse(result);
//     std.forEach((s) => {
//       console.log(s.name);
//     });
//   },
//   (err) => {
//     console.error(err.responseText);
//   }
// );

//* Asynchronous Callback (AJAX with JQuery)
// Example 1
// $.ajax({
//   url: "data/student.json",
//   success: (result) => {
//     result.forEach((r) => console.log(r.name));
//   },
//   error: (err) => {
//     console.error(err.responseText);
//   },
// });

// Example 2
$(".search-button").on("click", function () {
  $.ajax({
    url: `http://www.omdbapi.com/?apikey=2ddbc676&s=${$(".input-keyword").val()}`,
    success: (result) => {
      const movies = result.Search;
      let movie = "";

      movies.forEach((m) => {
        movie += showMovie(m);
      });
      $(".movie-container").html(movie);

      $(".modal-detail-btn").on("click", function () {
        $.ajax({
          url: `http://www.omdbapi.com/?apikey=2ddbc676&i=${$(this).data("imdbid")}`,
          success: (m) => {
            const movieDetail = showMovieDetail(m);
            $(".modal-body").html(movieDetail);
          },
          error: (err) => {
            console.error(err.responseText);
          },
        });
      });
    },
    error: (err) => {
      console.error(err.responseText);
    },
  });
});

function showMovie(m) {
  return /*html*/ `<div class="col-md-4 my-5">
                      <div class="card">
                        <img class="card-img-top" src="${m.Poster}" alt="Movie Poster" />
                        <div class="card-body">
                          <h4 class="card-title">${m.Title}</h4>
                          <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                          <a href="#" class="btn btn-primary btn-lg modal-detail-btn" data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${m.ImdbID}">Show Details</a>
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
