//* Object Literal
//! Tidak efektif untuk jumlah Object yang banyak
// let student1 = {
//   name: "Rezky",
//   energy: 10,
//   food: function (portion) {
//     this.energy += portion;
//     console.log(`Hai ${this.name}, selamat makan! Total energi Anda sekarang adalah ${this.energy}`);
//   },
// };

// let student2 = {
//   name: "Rizaldi",
//   energy: 20,
//   food: function (portion) {
//     this.energy += portion;
//     console.log(`Hai ${this.name}, selamat makan! Total energi Anda sekarang adalah ${this.energy}`);
//   },
// };

//* Function Declaration
//todo Wajib me-return value
//todo Manajemen memori secara manual
// const methodStudent = {
//   food: function (portion) {
//     this.energy += portion;
//     console.log(`Hai ${this.name}, selamat makan! Total energi Anda sekarang adalah ${this.energy}`);
//   },
//   play: function (time) {
//     this.energy -= time;
//     console.log(`Hai ${this.name}, selamat makan! Total energi Anda sekarang adalah ${this.energy}`);
//   },
//   sleep: function (time) {
//     this.energy += time * 2;
//     console.log(`Hai ${this.name}, selamat makan! Total energi Anda sekarang adalah ${this.energy}`);
//   },
// };

// function Student(name, energy) {
//   let student = {};
//   student.name = name;
//   student.energy = energy;
//   student.food = methodStudent.food;
//   student.play = methodStudent.play;
//   student.sleep = methodStudent.sleep;

//   return student;
// }

// let rezky = Student("Rezky", 10);
// let rizaldi = Student("Rizaldi", 20);

//* Constructor Function
// function Student(name, energy) {
//   student.name = name;
//   student.energy = energy;

//   student.food = function (portion) {
//     this.energy += portion;
//     console.log(`Hai ${this.name}, selamat makan! Total energi Anda sekarang adalah ${this.energy}`);
//   };

//   student.play = function (time) {
//     this.energy -= time;
//     console.log(`Hai ${this.name}, selamat makan! Total energi Anda sekarang adalah ${this.energy}`);
//   };
// }

// let rezky = new Student("Rezky", 10);
// let rizaldi = new Student("Rizaldi", 20);

//* Object.create() concept
//todo Memakai Object lain untuk mengeksekusi Parent Object
// const methodStudent = {
//   food: function (portion) {
//     this.energy += portion;
//     console.log(`Hai ${this.name}, selamat makan! Total energi Anda sekarang adalah ${this.energy}`);
//   },
//   play: function (time) {
//     this.energy -= time;
//     console.log(`Hai ${this.name}, selamat makan! Total energi Anda sekarang adalah ${this.energy}`);
//   },
//   sleep: function (time) {
//     this.energy += time * 2;
//     console.log(`Hai ${this.name}, selamat makan! Total energi Anda sekarang adalah ${this.energy}`);
//   },
// };

// function Student(name, energy) {
//   let student = Object.create(methodStudent);
//   this.name = name;
//   this.energy = energy;

//   return student;
// }

// let rezky = Student("Rezky", 10);
// let rizaldi = Student("Rizaldi", 20);

//* Object Prototypal Inheritance
// function Student(name, energy) {
//? let student = Object.create(Student.prototype);
//   this.name = name;
//   this.energy = energy;

//? return this;
// }

// Student.prototype.food = function (portion) {
//   this.energy += portion;
//   return `Hai ${this.name}, selamat makan! Total energi Anda sekarang adalah ${this.energy}`;
// };

// Student.prototype.play = function (time) {
//   this.energy -= time;
//   return `Hai ${this.name}, selamat makan! Total energi Anda sekarang adalah ${this.energy}`;
// };

// Student.prototype.sleep = function (time) {
//   this.energy += time * 2;
//   return `Hai ${this.name}, selamat makan! Total energi Anda sekarang adalah ${this.energy}`;
// };

// let rezky = new Student("Rezky", 10);
// let rizaldi = new Student("Rizaldi", 20);

//* Class
class Student {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  }
  food(portion) {
    this.energy += portion;
    return console.log(`Hai ${this.name}, selamat makan! Total energi Anda sekarang adalah ${this.energy}`);
  }
  play(time) {
    this.energy -= time;
    return console.log(`Hai ${this.name}, selamat makan! Total energi Anda sekarang adalah ${this.energy}`);
  }
  sleep(time) {
    this.energy += time * 2;
    return console.log(`Hai ${this.name}, selamat makan! Total energi Anda sekarang adalah ${this.energy}`);
  }
}

let rezky = new Student("Rezky", 10);
let rizaldi = new Student("Rizaldi", 20);
