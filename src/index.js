// Check for the various File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {
  function showFile() {
     var preview = document.getElementById('show-text');
     var file = document.querySelector('input[type=file]').files[0];
     var reader = new FileReader()

     var textFile = /text.*/;

     if (file.type.match(textFile)) {
        reader.onload = function (event) {
           preview.innerHTML = event.target.result;
           highlightText("happiness, health, joy, peace, and so much more that’s positive")
        }

     } else {
        preview.innerHTML = "<span class='error'>It doesn't seem to be a text file!</span>";
     }
     reader.readAsText(file);
  }

  function highlightText(textSearch) {
    var content = document.getElementById('show-text').innerHTML;
    var searchRegEx = new RegExp(textSearch, "gi");
    var matches = content.match(searchRegEx);
    console.log('content', content)
    
    if (matches && matches.length > 0) {
      // Làm nổi bật tất cả các khớp
      var replaceText = `<span class="highlight">${textSearch}</span>`;
      var highlightedContent = content.replace(searchRegEx, replaceText);
      document.getElementById('show-text').innerHTML = highlightedContent;
      
      // Cuộn đến vị trí của khớp đầu tiên
      var firstOccurrence = document.querySelector('.highlight');
      if (firstOccurrence) {
        firstOccurrence.scrollIntoView();
      }
    } else {
      console.log("No matches found");
    }
  }

} else {
  alert("Your browser is too old to support HTML5 File API");
}

