function openLetter() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("main").classList.remove("hidden");

  const music = document.getElementById("bgMusic");

  music.play().catch(() => {
    console.log("Autoplay blocked");
  });
}

function showMessage() {
  alert("I LOVE YOU SO MUCH BABY KRISTEL ❤️ Happy 2nd Monthsary 💖");
}