let videoFrame = document.getElementById("videoFrame");
let videoWrapper = document.getElementById("videoWrapper");
let videoOpenButton = document.getElementById("v-plchldr");
let videoCloseButton = document.getElementById("videoCloseButton");
let vimeoPlayer;

// Add event listener for the video open button
// When button is clicked, display the video wrapper then play the video
videoOpenButton.addEventListener("click", () => {
  videoWrapper.style.display = "block";
  playVideo();
});

// Add event listener for the video close button
// When button is clicked, stop the video and hide the video wrapper
videoCloseButton.addEventListener("click", () => {
  stopVideo();
});

// Function to initialize the Vimeo player
function initializePlayer() {
  vimeoPlayer = new Vimeo.Player(videoFrame);

  // You can add event listeners for player events here if needed
  // Example: vimeoPlayer.on('ended', function() { /* Do something */ });
}

// Function to play the video
async function playVideo() {
  if (!vimeoPlayer) {
    initializePlayer();
  }

  // Play the video
  try {
    await vimeoPlayer.play();
  } catch (error) {
    console.error("Error playing Vimeo video:", error);
  }
}

// Function to stop the video
function stopVideo() {
  if (vimeoPlayer) {
    vimeoPlayer.unload();
  }
  videoWrapper.style.display = "none";
}