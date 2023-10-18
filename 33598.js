function generateMediaScript() {
  // Get the values of the input fields.
  var mediaType = document.querySelector('.media-type').value;
  var mediaUrl = document.querySelector('.media-url').value;

  // Generate the HTML code for the media element.
  var mediaElementHtml;
  if (mediaType === 'embed-video') {
    mediaElementHtml = `<embed src="${mediaUrl}" type="video/mp4" width="640" height="480">`;
  } else if (mediaType === 'hls-player') {
    mediaElementHtml = `
      <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@clappr/player@latest/dist/clappr.min.js"></script>
      <div id="player"></div>
      <script>
        var player = new Clappr.Player({
          source: "${mediaUrl}",
          parentId: "#player",
          poster: "http://clappr.io/poster.png"
        });
      </script>
    `;
  }

  // Update the script in the text box.
  document.querySelector('.script-code').value = mediaElementHtml;
}

function copyScript() {
  // Get the text from the script text box.
  var scriptText = document.querySelector('.script-code').value;

  // Copy the text to the clipboard.
  navigator.clipboard.writeText(scriptText);
}
