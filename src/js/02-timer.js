import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import "flatpickr/dist/flatpickr.min.css";



const startBtn = document.querySelector("[data-start]");
// const currentDate = new Date();
const input = document.querySelector(`#datetime-picker`);
const daysOnTimer = document.querySelector("[data-days]");
const hoursOnTimer = document.querySelector("[data-hours]");
const minutesOnTimer = document.querySelector("[data-minutes]");
const secondsOnTimer = document.querySelector("[data-seconds]");
let timeCount = null;
let timeRemain = null;
const css = document.querySelector(`.timer`)

startBtn.addEventListener("click", timerCalc); 


css.setAttribute("style", "display:flex; gap: 24px;");
 
startBtn.disabled = true;
function timerCalc() {
  timeCount = setInterval (() => { 
    const currentDate = new Date(input.value);    
    const timeRemain = currentDate - Date.now();  
    const timeRemainMs = convertMs(timeRemain);
    if (timeRemain <= 0) {
      clearInterval(timeCount);
      // startBtn.disabled = false;
      css.setAttribute("style", "display:flex; gap: 24px;");
     Notiflix.Notify.success('Congradulations!!!!You can use the application!!!');
    return
  }
    transform(timeRemainMs);
    
    console.log(timeRemainMs);
  }, 1000);      
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    }
    {
      startBtn.disabled = false;   
    }  
    console.log(selectedDates[0]);
  },
};

flatpickr('#datetime-picker', options);   

function convertMs(ms) {

  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function transform( { days, hours, minutes, seconds } ) {
  daysOnTimer.textContent = addLeadingZero(JSON.stringify(days));
  hoursOnTimer.textContent = addLeadingZero(JSON.stringify(hours));
  minutesOnTimer.textContent = addLeadingZero(JSON.stringify(minutes));
  secondsOnTimer.textContent = addLeadingZero(JSON.stringify(seconds));
}

function addLeadingZero(value) {
  return value.padStart(2, "0");
};
