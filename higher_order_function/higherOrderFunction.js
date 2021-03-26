//* First Class Function
//? JavaScript memperlakukan function sebagai object. - https://sitepoint.com

//* Higher Order Function
//? Function yang beroperasi pada function yang lain. Baik itu digunakan dalam argument, maupun sebagai return value. - https://eloquentjavascript.net

//? function yang memiliki callback sebagai argument-nya disebut Higher Order Function.
//todo Berfungsi sebagai Abstraksi.
//? function yang disimpan sebagai argument disebut Callback.
// Ecample 1
// function task(course, finish) { //* Higher Order function
//   console.log(`Sedang mengerjakan tugas ${course}`);
//   finish();
// }

// function finish() { //* Callback
//   alert("Selesai mengerjakan tugas!");
// }

// task("Web Engineering", finish);

// Example 2
// setTimeout(() => {
//   console.log("Hello, World!");
// }, 1000);

// Example 3
// const btn = document.querySelector(".button");

// btn.addEventListener("click", function () {
//   console.log("Hello, World!");
// });

// Example 4
// function hello(time) {
//   return function (name) {
//     console.log(`Halo ${name}! Selamat ${time}`);
//   };
// }

// let malam = hello("Malam");

// console.dir(malam("Rezky"));

// Comparison
//* First Class Function
// let total = 0,
//   count = 1;

// while (count <= 10) {
//   total += count;
//   ++count;
// }

// console.log(total);

//* Higher Order Function
// // console.log(sum(range(1, 10)));

// Example 1 - Filter
//* First Class Function
// const number = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// let filteredNumber = [];

// for (let i = 0; i < number.length; ++i) {
//   if (number[i] >= 3) {
//     filteredNumber.push(angka[i]);
//   }
// }

// console.log(filteredNumber);

//* Higher Order Function
// const filteredNumber = number.filter((n) => n >= 3);

// console.log(filteredNumber);

// Example 2 - Map
// const number = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// const mappedNumber = number.map((n) => n * 2);

// console.log(mappedNumber);

// Example 3 - Reduce
// const number = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// const reducedNumber = number.reduce((acc, curr) => {
//   acc + curr;
// });

// console.log(reducedNumber);

//* Chaining Method
// const number = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// const result = number
//   .filter((n) => n > 5)
//   .map((n) => n * 3)
//   .reduce((acc, curr) => acc + curr);

// console.log(result);

// Exercise
const videos = Array.from(document.querySelectorAll("ul li['data-duration']"));
let result = videos
  .filter((video) => video.textContent.includes("Vtuber Sub Indo"))
  .map((item) => item.dataset.duration)
  .map((time) => {
    const parts = time.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })
  .reduce((acc, val) => acc + val);

const hour = Math.floor(result / 3600);
result -= hour * 3600;
const minute = Math.floor(result / 60);
const second = Math.floor(result + minute * 60);

const totalDuration = document.querySelector(".total-duration");
totalDuration.textContent = `Total Durasi Video: ${hour} jam ${minute} menit ${second} detik`;
const videoCount = document.querySelector(".video-count");
const totalVideos = videos.filter((video) => video.textContent.includes("Vtuber Sub Indo")).length;
totalVideos.textContent = `Jumlah Video: ${totalVideos}`;
