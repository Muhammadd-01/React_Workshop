//Asynchronous Code

console.log("Start");  

setTimeout(() => {
  console.log("Async Task Done!"); // Runs after 2 sec
}, 2000);

console.log("End");


//Promise Example

const myPromise = new Promise((resolve, reject) => {
    let success = false;
    if (success) {
      resolve("Task Successful! ✅");
    } else {
      reject("Task Failed! ❌");
    }
  });
  
  // Handling Promise
  myPromise
    .then((msg) => console.log(msg)) // Runs if resolved
    .catch((err) => console.log(err)); // Runs if rejected
  