videojs.registerPlugin("listenForParent", function() {
  var myPlayer = this;
  // This method called when postMessage sends data into the iframe
  function controlVideo(evt) {
    if (evt.data === "unmute") {
      myPlayer.muted(false);
    }
  }
  // Listen for the message, then call controlVideo() method when received
  window.addEventListener("message", controlVideo);
});
