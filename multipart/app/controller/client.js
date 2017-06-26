'use strict';

module.exports = function* () {
  this.body = `
<script src="https://code.jquery.com/jquery-1.11.3.js"></script>

<form method="post" enctype="multipart/form-data" action="/upload?_csrf=${this.csrf}">
  <p>Title: <input type="text" name="title" /></p>
  <p>Image: <input type="file" name="image" /></p>
  <p><input type="button" value="Upload" /></p>
</form>

<script>
$('input[type=button]').click(function(event) {
  console.log(event);
  var formData = new FormData();
  formData.append('section', 'general');
  formData.append('action', 'previewImg');
  // Attach file
  formData.append('image', $('input[type=file]')[0].files[0]);
  // console.log(formData);

  $.ajax({
    url: '/upload?_csrf=${this.csrf}',
    data: formData,
    type: 'POST',
    contentType: false, // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
    processData: false, // NEEDED, DON'T OMIT THIS
    success: function(result) {
      alert('upload success: ' + JSON.stringify(result));
    },
    error: function(responseStr) {
      console.log("error", responseStr);
    }
  });
});
</script>

    `;
};
