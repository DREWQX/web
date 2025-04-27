function startPage() {
  setTimeout(() => {
    // Speed up tire spin
    document.querySelector('.loading-tire').style.animation = "spinTireFast 0.5s linear infinite";

    setTimeout(() => {
      document.getElementById("loader").style.display = "none";
      document.getElementById("page").style.display = "block";
    }, 500); // After fast spin
  }, 2000); // Normal spin duration
}

// Define fast spin animation dynamically
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
@keyframes spinTireFast {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(720deg); }
}
`;
document.head.appendChild(styleSheet);

function playSound() {
  const sound = document.getElementById('carSound');
  sound.currentTime = 0;
  sound.play();
}
