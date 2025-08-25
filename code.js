const img = document.getElementById('imagedrag');

    let offsetX = 0;
    let offsetY = 0;
    let isDragging = false;

    // When mouse is pressed down on the image
    img.addEventListener('mousedown', function(event) {
      isDragging = true;
      // Calculate the offset from the top-left corner of the image
      offsetX = event.clientX - img.offsetLeft;
      offsetY = event.clientY - img.offsetTop;
    });

    // When mouse moves
    document.addEventListener('mousemove', function(event) {
      if (isDragging) {
        // Move the image to follow the mouse cursor
        img.style.left = (event.clientX - offsetX) + 'px';
        img.style.top = (event.clientY - offsetY) + 'px';
      }
    });

    // When mouse button is released
    document.addEventListener('mouseup', function() {
      isDragging = false;
    });