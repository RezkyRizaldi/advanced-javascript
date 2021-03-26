//* Asynchronous Function
//? Sebuah function yang bekerja secara asynchronous (melalui event loop) yang menghasilkan (implisit) promise sebagai return value-nya, tetapi syntax-nya ditulis secara synchronous (standard syntax). - MDN (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
//? Sebuah async function dapat memiliki keyword await di dalamnya yang berfungsi untuk memberhentikan sementara eksekusi function-nya sambil menunggu promise-nya selesai. - MDN (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

//* Promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Selesai");
//   }, 2000);
// });
// promise.then(() => console.log(promise));

//* Async-await
// Example
function promise() {
  return new Promise((resolve, reject) => {
    const time = 5000;
    if (time < 5000) {
      setTimeout(() => {
        resolve("Selesai");
      }, time);
    } else {
      reject("Kelamaan!");
    }
  });
}

// const promise = promise();
// promise.then((promise) => console.log(promise)).catch((promise) => console.log(promise));

async function async() {
  try {
    const promise = await promise();
    console.log(promise);
  } catch (err) {
    console.error(err);
  }
}

async();
