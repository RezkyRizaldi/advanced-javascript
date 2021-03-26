//* Function Declaration
// function show(name) {
//   alert(`Hello, ${name}`);
// }

// show("Rezky");

//* Function Expression
// let show = function (name) {
//   alert(`Hello, ${name}`);
// }

// show("Rezky");

//* Arrow Function (ES6)
//? Bentuk lain yang lebih ringkas dari Function Expression. - MDN
//todo Arrow Function tidak memiliki konsep this
// const show = () => `Hello, World!`;
// const show = (name) => `Hello, ${name}!`; //* Implicit Return

// const show = (name, time) => {
//   return `Hello, ${name}! Selamat ${time}.`;
// };

// console.log(show("Rezky", "Malam"));

// Example 1
// let students = ["Muhamad", "Rezky", "Rizaldi"];
// let words = students.map((w) => w.length);
// console.log(words);
// let studentName = students.map((n) => ({ name: n, words: n.length }));
// console.table(studentName);

//* Constructor Function
//! Return value = NaN (Not a Number), jika menggunakan Function Declaration
//todo konsep this mengacu pada Lexical Scope jika menggunakan Arrow Function
// const Student = function () {
//   this.name = "Rezky";
//   this.age = 19;
//   this.hello = () => {
//     console.log(`Halo, nama saya ${this.name}. Saya umur ${this.age}`);
//   };

//   setInterval(() => {
//     console.log(++this.age);
//   }, 500);
// };

// const rezky = new Student();

//* Object Literal
//! Return value = Undefined
//todo konsep this mengacu pada Global Scope jika tidak ada this di Lexical Scope
// const rezky = {
//   name: "Rezky",
//   age: 19,
//   hello: () => {
//     console.log(`Halo, nama saya ${this.name}. Saya umur ${this.age}`);
//   },
// };

// rezky.hello();

// Example 2
const box = document.querySelector(".box");
box.addEventListener("click", function () {
  let size = "size";
  let caption = "caption";

  if (this.classList.contains(size)) {
    [size, caption] = [caption, size];
  }

  this.classList.toggle("size");
  setTimeout(() => {
    this.classList.toggle("caption");
  }, 600);
});
