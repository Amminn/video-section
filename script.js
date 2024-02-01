let videoFrame = document.getElementById("videoFrame");
let videoWrapper = document.getElementById("videoWrapper");
let videoOpenButton = document.getElementById("v-plchldr")
let videoCloseButton = document.getElementById("videoCloseButton");

videoOpenButton.addEventListener("click", () => {
  console.log('open')
  videoWrapper.style.display = "block";
  playVideo();
})

videoCloseButton.addEventListener("click", () => {
  console.log('close')
  stopVideo();
})

function playVideo() {
  var src = videoFrame.src;
  videoFrame.src = src + "?autoplay=1";
}

function stopVideo() {
  console.log(videoWrapper)
  videoWrapper.style.display = "none";
  var src = videoFrame.src;
  videoFrame.src = src.replace("?autoplay=1", "");
  // videoFrame.style.display = "none";
}