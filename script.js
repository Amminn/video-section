let videoFrame = document.getElementById("videoFrame");
let videoWrapper = document.getElementById("videoWrapper");
let videoOpenButton = document.getElementById("v-plchldr")
let videoCloseButton = document.getElementById("videoCloseButton");

// Add event listener for the video open button
// When button is clicked, display the video wrapper then play the video
videoOpenButton.addEventListener("click", () => {
  videoWrapper.style.display = "block";
  playVideo();
})

// Add event listener for the video close button
// When button is clicked, stop the video and hide the video wrapper
videoCloseButton.addEventListener("click", () => {
  stopVideo();
})

// Function to play the video
// It updates the videoFrame src to include autoplay query parameter
function playVideo() {
  var src = videoFrame.src;
  videoFrame.src = src + "?autoplay=1";
}

// Function to stop the video
// It hides the video wrapper and removes the autoplay query parameter from videoFrame src to stop it
function stopVideo() {
  var src = videoFrame.src;
  videoFrame.src = src.replace("?autoplay=1", "");
  videoWrapper.style.display = "none";
}