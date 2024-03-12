// // Get the input field
// var left = document.getElementById("left");

window.addEventListener(
  "keydown",
  function (event) {
    if (event.key === "f") {
      document.getElementById("left").click();
    }
    if (event.key === "j") {
      document.getElementById("right").click();
    }
  },
  false
);
