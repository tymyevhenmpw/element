// let scrub = 1; // Initialize scrub globally

// function updateFPS() {
//   let fpsArray = [];

//   function calculateFPS() {
//     let t = Date.now();
//     let fps = Math.round(1000 / (t - previousTimestamp));
//     previousTimestamp = t;
//     return fps;
//   }

//   function checkAndSetScrub() {
//     let sum = fpsArray.reduce((acc, val) => acc + val, 0);
//     let averageFPS = sum / fpsArray.length;

//     if (averageFPS < 50) {
//       scrub = 0;
//       console.log('Setting scrub to 0');
//     } else {
//       scrub = 1;
//       console.log('Setting scrub to 1');
//     }

//     fpsArray = [];
//   }

//   function displayFPS() {
//     let fps = calculateFPS();
//     fpsArray.push(fps);

//     console.log(fps + ' FPS');
//     document.getElementById('cpu-usage').innerText = fps;

//     if (fpsArray.length >= 50) {
//       checkAndSetScrub();
//     }

//     requestAnimationFrame(displayFPS);
//   }

//   let previousTimestamp = Date.now();
//   displayFPS();

//   return scrub; // This won't capture the updated scrub value in the calling code
// }

// // Call the function to start updating and displaying FPS
// updateFPS();

// function clearConsole() {
//   console.clear();
// }

// // Clear the console every 5 seconds (5000 milliseconds)
// setInterval(clearConsole, 5000);

// export default scrub;



