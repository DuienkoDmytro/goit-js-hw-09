const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
let startColor = null;

startBtn.addEventListener("click", onClickStartBtn);
stopBtn.addEventListener("click", onClickStopBtn);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};


function onClickStartBtn() {
  startColor = setInterval(getRandomHexColor(), 1000);
  const color = getRandomHexColor(); 
  document.querySelector('body').style.backgroundColor = `${color}`;
    startBtn.disabled = true;
    stopBtn.disabled = false;
};


function onClickStopBtn() {
    clearInterval(startColor);
     startBtn.disabled = false;
    stopBtn.disabled = true;
};
