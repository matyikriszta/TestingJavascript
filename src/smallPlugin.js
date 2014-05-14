function smallPlugin(button, paragraph) {
  button.on('click', function() {
    paragraph.slideToggle(100);
  })
} 