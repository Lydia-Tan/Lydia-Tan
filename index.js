// var greeting_box = $(".textbox-greeting")
// var contact_box = $(".textbox-contact")
var i = 0;
var text = "Welcome, I'm Lydia. This site is still under construction so come by again later!";

// document.getElementsByTagName("p")
var speed = 45; /* The speed/duration of the effect in milliseconds */

typeWriter()

console.log(text)
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter_test").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}