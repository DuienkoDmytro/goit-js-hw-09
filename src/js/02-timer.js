import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const startBtn = document.querySelector("[data-start]");
// const currentDate = new Date();
const input = document.querySelector(`#datetime-picker`);
const days = document.querySelector("[data-days]");
const hours = document.querySelector("[data-hours]");
const minutes = document.querySelector("[data-minutes]");
const seconds = document.querySelector("[data-seconds]");
let timeCount = null;


startBtn.addEventListener("click", timerCalc); 

 
startBtn.disabled = true;
function timerCalc() {
  timeCount = setInterval (() => { 
  const currentDate = new Date(input.value);
    const timeRemain = currentDate - new Date;  
    convertMs(timeRemain);
   
    console.log(timeRemain);
  }, 1000); 
  transform();
 }

 
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < Date.now()) {
      window.alert("Please choose a date in the future");
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
  days.textContent = days;
  hours.textContent = hours;
  minutes.textContent = minutes;
  seconds.textContent = seconds;
}




