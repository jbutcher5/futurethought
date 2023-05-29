window.onload = () => {
  const window_width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

  if (window_width <= 700) {
    const centre_box = document.getElementById("centre-box");
    centre_box.style.width = "100%";
  }
}
