//* Promise
//? Sebuah Object yang merepresentasikan keberhasilan atau kegagalan dari sebuah event yang asynchronous di masa yang akan datang.
//? Statenya mencakup fulfilled, rejected, dan pending
//? Callbacknya mencakup resolve, reject, dan finally
//? Actionnya mencakup then dan catch

//* HTTP Request (AJAX with JQuery)
// $.ajax({
//   url: "http://www.omdbapi.com/?apikey=dca61bcc&s=avengers",
//   success: (response) => console.log(response),
//   error: (err) => console.error(err.responseText),
// });

//* HTTP Request (AJAX with Vanilla JavaScript)
// const xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4) {
//     if (xhr.status === 200) {
//       console.log(JSON.parse(xhr.response));
//     } else {
//       console.error(xhr.responseText);
//     }
//   }
// };

// xhr.open("GET", "http://www.omdbapi.com/?apikey=dca61bcc&s=avengers");
// xhr.send();

//* HTTP Request (ES6 JavaScript)
// fetch("http://www.omdbapi.com/?apikey=dca61bcc&s=avengers")
//   .then((response) => response.json())
//   .catch((response) => console.error(response));

// Example 1
// let fulfilled = true;
// const promise = new Promise((resolve, reject) => {
//   if (fulfilled) {
//     resolve("Janji telah ditepati!");
//   } else {
//     reject("Ingkar janji!");
//   }
// })
//   .then((response) => console.log(`OK! ${response}`))
//   .catch((response) => console.error(`Not OK! ${response}`));

// Example 2
// let fulfilled = true;
// const promise = new Promise((resolve, reject) => {
//   if (fulfilled) {
//     setTimeout(() => {
//       resolve(`Janji telah ditepati!`);
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       reject(`Ingkar janji!`);
//     }, 2000);
//   }
// })
//   // .then(() => console.log(promise))
//   .finally(() => console.log(`Selesai menunggu.`))
//   .then((response) => console.log(`OK! ${response}`))
//   .catch((response) => console.error(`Not OK! ${response}`));

// Example 3
const film = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([
      {
        title: "Avengers",
        director: "Rezky ",
        cast: "Muhamad, Rizaldi",
      },
    ]);
  }, 1000);
});

const weather = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([
      {
        city: "Bandung",
        temperature: 21,
        condition: "Cloudy",
      },
    ]);
  }, 500);
});

// film.then((response) => console.log(response));
// weather.then((response) => console.log(response));
Promise.all([film, weather]).then((response) => {
  const [film, weather] = response;
  console.log(film, weather);
});
