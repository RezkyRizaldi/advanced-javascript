//* Template Literal / Template String
//? String Literal yang memungkinkan adanya expression di dalamnya. - MDN
//todo Menggunakan `` (Back tick)
//* Multi-line String
// console.log(
//   `
//   lorem 1
//   lorem 2
//   lorem 3
//   `
// );

//* Embedded Expression
// console.log(`lorem ${expression} 1`);

/*
//* HTML Fragments
// const student = {
//   name: "Rezky",
//   age: 19,
// };

// let el = `<div class="student">
//   <h2>${student.name}</h2>
//   <h2>${student.age}</h2>
// </div>`;

// document.body.innerHTML(el);

//* Looping
// const student = [
//   {
//     name: "Muhamad",
//     age: 19,
//   },
//   {
//     name: "Rezky",
//     age: 19,
//   },
//   {
//     name: "Rizaldi",
//     age: 19,
//   },
// ];

// let el = `<div class="students">
//   ${student.map(
//     (s) => `<ul>
//     <li>${s.name}</li>
//     <li>${s.age}</li>
//   </ul>`
//   ).join('')}
// </div>`;

//* Conditinal
// const song = {
//   title: "Yoru ni Kakeru",
//   singer: "YOASOBI",
// };

// let el = `<div class="songs">
//   <ul>
//     <li>${song.title}</li>
//     <li>${song.singer} ${song.feat ? `feat. ${feat}` : ""}</li>
//   </ul>
// </div>`;

//* Nested
// const student = {
//   name: "Rezky",
//   age: 19,
//   semester: 1,
//   course: ["Web Engineering", "Web Design", "Web Developer"],
// };

// let el = `<div class="songs">
//   <h2>${student.name}</h2>
//   <h4>Mata Kuliah</h4>
//   ${print(student.course)}
// </div>`;

// function print(course) {
//   return `
//     <ol>
//       ${course.map((c) => `<li>${c}</li>`).join("")}
//     </ol>
//   `;
// }
*/

//* Expression Interpolation
// let x = 10;
// let y = 15;

// console.log(`Jika x = ${x} dan y = ${y}, maka hasil dari x + y adalah ${x + y}`);

/*
//* Tagged Template
//? Bentuk yang lebih kompleks dari Template Literal yang memungkinkan untuk membaca Template Literal melalui sebuah function. - MDN
//? Berfungsi sebagai Escaping HTML Tags, Translation & Internationalization, Styled Components
//* Escaping HTML Tags
// function sanitize(str, ...args) {
//   return DOMPurify.sanitize(aboutMe);
// }

// const name = "Rezky";
// const aboutMe = `Lorem ipsum dolor sit amet consectetur adipisicing elit. <img src="http://example.com" onload="alert('Web Anda kena Hack!')" />`;

// const html = sanitize`
//   <h3>${name}</h3>
//   <p>${aboutMe}</p>
// `;

//* Translation & Internationalization - https://github.com/skolmer/es2015-i18n-tag
// const html = i18n`Hello ${name}, you have ${amount}:c in your bank account.`;

//* Styled Components - https://www.styledcomponents.com/docs/basics#getting-started
// let title = styled.h1`
//   font-size: 1.5em;
//   text-align: center:
//   color: palevioletred;
// `;
*/

// Example
// const name = "Rezky";
// const age = 19;

// function highlight(strings, ...args) { //* Rest Parameter
//   // let result = "";
//   // strings.forEach((str, i) => {
//   //   result += `${str}${args[i] || ""}`;
//   // });

//   // return result;

//   return strings.reduce((result, str, i) => `${result}${str}<span class="highlight">${args[i] || ""}</span>`, "");
// }

// const str = highlight`Halo nama saya ${name}, saya umur ${age} tahun.`;
// console.log(str);
