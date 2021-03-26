//* for of
//? Sebuah Loop Statement yang dapat mengubah atau menelusuri Iterable Objects (String, Array, Arguments/NodeList, TypedArray, Map, Set, User-defined iterables). - MDN (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for..of)

//* Array
// const students = ["Muhamad", "Rezky", "Rizaldi"];

// For
// for (let i = 0; i < students.length; ++i) {
//   console.log(students[i]);
// }

// ForEach
//todo tidak di-support semua browser, terutama versi lawas
// students.forEach((s, i) => {
//   console.log(`${s} adalah murid ke-${i + 1}`);
// });

// For of
//todo tidak memiliki index, penggantinya adalah method entries()
// for (const [i, s] of students.entries()) {
//   console.log(`${s} adalah murid ke-${i + 1}`);
// }

//* String
// const name = "Rezky";

// for (const n of name) {
//   console.log(n);
// }

//* NodeList
// const students = document.querySelectorAll(".student");
// students.forEach((s, i) => {
//   console.log(`${s.textContent} adalah murid ke-${i + 1}`);
// });

// for (const s of students) {
//   console.log(s.textContent);
// }

//* Arguments
// function add() {
//   console.log(arguments);
//   return arguments.reduce((acc, curr) => acc + curr); //! Error

//   let result = 0;
//   arguments.forEach(r => result += r); //! Error
//   return result;

//   for (const r of arguments) {
//     result += r;
//   }

//   return result;
// }

// console.log(add(1, 2, 3, 4, 5));

//* for in
//? Sebuah Loop Statement yang dapat mengubah atau menelusuri iteration yang enumerable. - MDN (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for..in)

const student = {
  name: "Rezky",
  age: 19,
  email: "rezkyrizaldi30@gmail.com",
};

// for (const s of student) { //! Error
//   console.log(s);
// }

for (const s in student) {
  console.log(student[s]);
}
