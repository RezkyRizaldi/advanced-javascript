//? Closure merupakan kombinasi antara function dan lexical scope di dalam function tersebut.
//? Untuk membuat Function Factories
//? Untuk membuat private method
//* Source: MDN

//? Closure adalah sebuah function ketika memiliki akses ke parent scope, mesikpun parent scope tersebut telah selesai dieksekusi.
//* Source: W3School

//? Closure adalah sebuah function yang di-return oleh function lain yang memiliki akses ke lexical scope saat ia diciptakan.
//* Source: Code Fellow

//? Closure adalah sebuah function yang sebelumya telah memiliki data yang merupakan result dari function yang lain.
//* Source: Techsith

//* Lexical Scope
// function init() { //? Outer function
//   let name = "Rezky"; //? local variable
//   return function (name) { //? inner function (closure*)
//     console.log(name); //? akses parent variable
//   };
//   // show();
//   // console.log(show());
//   // console.dir(show);
//   // return show;
// }
// // init();
// let call = init();
// call("Rezky");

// Example 1
// function hello(time) {
//   return function (name) {
//     console.log(`Halo ${name}, selamat ${time}!`);
//   };
// }

// let goodMorning = hello("pagi");
// let goodEvening = hello("siang");
// let goodNight = hello("malam");

// hello("Rezky");
// goodNight("Rizaldi");
// // console.dir(goodNight);
// // console.log(goodNight("Rezky"));

// Example 2
// let counter = 0;
// let add = function () { //? function expression
//   return function () {
//     return ++counter;
//   };
// };

// let a = add();

// console.log(a());
// console.log(a());
// console.log(a());

//* Immediately Invoke Function
let counter = 0;
let add = (function () {
  return function () {
    return ++counter;
  };
})();

counter = 100; //todo tidak akan mempengaruhi function

console.log(add());
console.log(add());
console.log(add());
