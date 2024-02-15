function updateFPS() {
  let t = Date.now();

  function calculateFPS() {
    let fps = Math.round(1000 / (Date.now() - t));
    t = Date.now(); // Update the timestamp for the next frame
    return fps;
  }

  function displayFPS() {
    const fps = calculateFPS();
    console.log(fps + " FPS");

    // Using fetch to send data as query parameter
    fetch(`/usermetrics?fps=${fps}`, { method: 'GET' })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      })
      .catch(error => console.error('Error sending FPS data:', error));

    document.getElementById("cpu-usage").innerText = fps;
    requestAnimationFrame(displayFPS); // Request the next frame
  }

  displayFPS(); // Start the loop
}

// Call the function to start updating and displaying FPS
updateFPS();



