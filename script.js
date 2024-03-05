         window.promises = [];
window.onload = function() {
  // Array to store promises
  let promises = [
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise()
  ];

  // Use Promise.any() to wait for the first promise to resolve
  Promise.any(promises)
    .then(result => {
      // Print the result to the output div
      document.getElementById("output").innerText = result;
    })
    .catch(error => {
      console.error("An error occurred:", error);
    });

  // Function to create a promise with random resolve time
  function createPromise() {
    const time = Math.random() * (5) + 1; // Random time between 1 and 5 seconds
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(`Resolved after ${time} seconds`);
      }, time * 1000);
    });
  }
};