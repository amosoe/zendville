
// When the user scrolls down 95px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 95 || document.documentElement.scrollTop > 95) {
    document.getElementById("zendnavbar").style.backgroundColor = "#fff";
    document.getElementById("goTop").style.display = "block";
  } else {
    document.getElementById("zendnavbar").style.backgroundColor = "#f8f9fa";
    document.getElementById("goTop").style.display = "none";
  }
}
