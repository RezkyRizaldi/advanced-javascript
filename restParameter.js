//* Rest Parameter
//? Sesuatu yang merepresentasikan argument pada function dengan jumlah yang tidak terbatas menjadi sebuah array. - MDN (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Rest_paramters)

//todo tidak dapat ditempatkan di awal parameter
// Example 1
// function myFunc(a, b, ...args) {
//   // return Array.from(arguments);
//   // return [...arguments];
//   return `Nilai a = ${a}, Nilai b = ${b}, Nilai arguments = ${args}`;
// }

// console.log(myFunc(1, 2, 3, 4, 5));

// Example 2
// function add(...nums) {
//   // let result = 0;
//   // for (const n of nums) {
//   //   result += n;
//   // }

//   // return result;
//   return nums.reduce((acc, curr) => acc + curr);
// }

// console.log(myFunc(1, 2, 3, 4, 5));

//* Array Destructuring
// const group1 = ["Muhamad", "Rezky", "Rizaldi", "SiNahwey", "Kiww"];
// // const leader = group1[0];
// // const coLeader = group1[1];
// const [leader, coLeader, ...members] = group1;
// console.log(leader, coLeader, members);

//* Object Destructuring
// const team = {
//   pm: "Muhamad",
//   frontEnd: "Rezky",
//   backEnd: "Rizaldi",
//   ux: "SiNahwey",
//   devOps: "Kiww",
// };

// const { pm, ...members } = team;
// console.log(pm, members);

//* Filtering
function filterBy(type, ...args) {
  return args.filter((a) => typeof a === type);
}

console.log(filterBy("number", 1, 2, "Rezky", false, -10, true, "Rizaldi"));
