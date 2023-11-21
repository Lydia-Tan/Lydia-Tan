var greeting_box = $(".textbox-greeting")
var contact_box = $(".textbox-contact")

greeting_box.on("click", function() {
    greeting_box.hide();
    contact_box.show();
  });