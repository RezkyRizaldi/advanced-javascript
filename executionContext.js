//* Creation Phase pada Global Context
//? var name = undefined;
//? var function = fn();
//* Hoisting
//? window
//? this

//* Execution Phase
// var name = "Rezky";
// var age = 19;

// console.log(hello());

// function hello() {
//   return console.log(`Halo, nama saya ${name}, saya ${age} tahun.`);
// }

//? function membuat Local Execution Context
//? scope args > params
//? window
//? arguments

// Example 1
// var name = "Rezky Rizaldi";
// var username = "rezkyrizaldii";

// function print(username) {
//   var instagramBaseURL = "https://instagram.com/";
//   return `Ini adalah username Instagram Anda: ${instagramBaseURL}${username}`;
// }

// console.log(print(username));

// Example 2
// function one() {
//   console.log("Ini fungsi pertama");

//   function two() {
//     console.log("Ini fungsi kedua");

//     function three() {
//       console.log("Ini fungsi ketiga");
//     }
//     three();
//   }
//   two();
// }
// one();

//* Scope
var name = "Rezky Rizaldi";
var username = "rezkyrizaldii";

function print() {
  //? console.log(arguments);
  var instagramBaseURL = "https://instagram.com/";
  return `Ini adalah username Instagram Anda: ${instagramBaseURL}${username}`;
}

console.log(print("sinahwey", "kiww"));
