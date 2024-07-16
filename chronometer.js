let time = 0;
let isRunning = false;
let intervalId;

const display = document.getElementById("display");
const startStopBtn = document.getElementById("startStop");
const resetBtn = document.getElementById("reset");

function formatTime(time) {
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const hundredths = time % 100;
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}.${hundredths.toString().padStart(2, "0")}`;
}

function updateDisplay() {
  display.textContent = formatTime(time);
}

function startStop() {
  if (isRunning) {
    clearInterval(intervalId);
    startStopBtn.textContent = "Start";
    startStopBtn.classList.remove("bg-red-500", "hover:bg-red-600");
    startStopBtn.classList.add("bg-green-500", "hover:bg-green-600");
  } else {
    intervalId = setInterval(() => {
      time++;
      updateDisplay();
    }, 10);
    startStopBtn.textContent = "Stop";
    startStopBtn.classList.remove("bg-green-500", "hover:bg-green-600");
    startStopBtn.classList.add("bg-red-500", "hover:bg-red-600");
  }
  isRunning = !isRunning;
}

function reset() {
  clearInterval(intervalId);
  time = 0;
  isRunning = false;
  updateDisplay();
  startStopBtn.textContent = "Start";
  startStopBtn.classList.remove("bg-red-500", "hover:bg-red-600");
  startStopBtn.classList.add("bg-green-500", "hover:bg-green-600");
}

startStopBtn.addEventListener("click", startStop);
resetBtn.addEventListener("click", reset);
