function generateMediaScript() {
  // Get the values of the input fields.
  var mediaType = document.querySelector('.media-type').value;
  var mediaUrl = document.querySelector('.media-url').value;

  // Generate the HTML code for the media element.
  var mediaElementHtml;
  if (mediaType === 'embed-video') {
    mediaElementHtml = `<iframe allowfullscreen="true" style="display: block;border-radius: 5px;border: 0px;margin: 0 auto;" height="550" src="${mediaUrl}" width="100%"></iframe>`;
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
  document.querySelector('.Code').value = mediaElementHtml;
}

function copyScript() {
  // Get the text from the script text box.
  var scriptText = document.querySelector('.Code').value;

  // Copy the text to the clipboard.
  navigator.clipboard.writeText(scriptText);
}