window.onload = () => {
  const centre_box = document.getElementById("centre-box");

  var window_width = (0 < window.innerWidth && window.innerWidth < screen.width) ? window.innerWidth : screen.width;

  if (window_width <= 500) {
    centre_box.style.width = "98%";
  } else if (window_width <= 700) {
    centre_box.style.width = "70%";
  }
}
