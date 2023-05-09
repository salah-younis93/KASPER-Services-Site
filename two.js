let scrlBtn = document.getElementById("scrolling");

window.onscroll = function () {
  if (window.scrollY >= 550) {
    scrlBtn.style.display = "block"
  } else {
    scrlBtn.style.display = "none"
  }
}

scrlBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  })
}