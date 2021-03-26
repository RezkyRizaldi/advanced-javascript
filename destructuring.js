//* Destructuring Assignment / Destructuring Variable
//? Suatu Expression pada JavaScript yang memungkinkan untuk dapat membongkar value dari array atau property dari object ke dalam variable yang terpisah. - MDN (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring-assignment)

// Example
/* Destructuring Array
// const str = ["satu", "dua", "tiga"];
// const [a, b, c] = str;

// console.log(a, b, c);

//* Skipping items
// const str = ["satu", "dua", "tiga"];
// const [a, , c] = str;

//* Swapping items
// let x = 10;
// let y = 20;
// [a, b] = [b, a];

// console.log(x);

//* Return function values
// function nums() {
//   return [1, 2];
// }

// const [x, y] = nums();
// console.log(x);

//* Rest Parameter
// const [x, ...nums] = [1, 2, 3, 4, 5];
// console.log(x, nums);
*/

//* Destructuring Object
// const student = {
//   name: "Rezky",
//   age: 19,
//   email: "rezkyrizaldi30@gmail.com",
// };

//* Assign tanpa declaration object
// ({ name, age, email } = { name: "Rezky", age: 19, email: "rezkyrizaldi30@gmail.com" });
// console.log(name, age, email);

//* Assign ke variabel baru
// const student = {
//   name: "Rezky",
//   age: 19,
//   email: "rezkyrizaldi30@gmail.com",
// };

// const { name: n, age: a } = student;
// console.log(n);

//* Memberi default value
// const student = {
//   name: "Rezky",
//   age: 19,
// };

// const { name, age, email = "default@example.com" } = student;
// console.log(email);

//* Rest Parameter
// const student = {
//   name: "Rezky",
//   age: 19,
//   email: "rezkyrizaldi30@gmail.com",
// };

// const { name, ...items } = student;
// console.log(items);

//* Mengambil field pada object setelah dikirim sebagai params untuk sebuah function
const student = {
  id: 1,
  name: "Rezky",
  age: 19,
  email: "rezkyrizaldi30@gmail.com",
};

function getID({ id }) {
  return id;
}

console.log(getID(student));

//* Destructuring Function
// Array
// function calc(x, y) {
//   return [x + y, x - y, x * y, x / y, x % y];
// }

// // const result = calc(2, 3)[0];
// const [addition, substraction, multiplication, division, modulus] = calc(2, 3);
// console.log(division);

// Object
// function calc(x, y) {
//   return {
//     addition: x + y,
//     substraction: x - y,
//     multiplication: x * y,
//     division: x / y,
//     modulus: x % y,
//   };
// }

// const { substraction, modulus, division, addition, multiplication } = calc(2, 3);
// console.log(multiplication);

//* Destructuring Function Arguments
const student1 = {
  name: "Rezky",
  age: 19,
  email: "rezkyrizaldi30@gmail.com",
  score: {
    task: 80,
    middleExam: 85,
    finalExam: 70,
  },
};

// function print(student) {
//   return `Halo nama saya ${student.name}, saya umur ${student.age} tahun.`;
// }

// console.log(print(student));

function print({ name, age, score: { finalExam } }) {
  return `Halo nama saya ${name}, saya umur ${age} tahun. Dan nilai UAS saya ${finalExam}`;
}

console.log(print(student1));
