const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
let startColor = null;

startBtn.addEventListener("click", onClickStartBtn);
stopBtn.addEventListener("click", onClickStopBtn);
stopBtn.disabled = true;


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};


function onClickStartBtn() {
  startColor = setInterval(changeColorFunction, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
};

function changeColorFunction() {
   const color = getRandomHexColor(); 
  document.querySelector('body').style.backgroundColor = `${color}`;
};


function onClickStopBtn() {
    clearInterval(startColor);
     startBtn.disabled = false;
    stopBtn.disabled = true;
};
