//* Spread Operator
//? Sebuah operator yang memecah (expand/unpack) Iterable Objects element menjadi single element. - MDN (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

const student = ["Muhamad", "Rezky", "Rizaldi"];
console.log(...student);

//* Menggabungkan array
//todo Lebih fleksibel dalam penambahan elemen di antara dua array
// const student1 = ["Muhamad", "Rezky", "Rizaldi"];
// const student2 = ["SiNahwey", "Kiww", "Eki"];
// // const students = student1.concat(student2);
// const students = [...student1, "test", ...student2];
// console.log(students);

//* Menyalin array
// Example 1
// const students1 = ["Muhamad", "Rezky", "Rizaldi"];
// // const student1 = student2;
// const students2 = [...students1];
// students2[0] = "SiNahwey";
// console.log(students1, students2);

// Example 2
// const students = document.querySelectorAll("li");
// const std = [];

// for (let i = 0; i < students.length; ++i) {
//   std.push(students[i].textContent);
// }

// const std = [...students].map((s) => s.textContent);
// console.log(std);

// Example 3
const name = document.querySelector(".name");
const word = [...name.textContent].map((w) => `<span>${w}</span>`).join("");
name.innerHTML = word;

console.log(word);
