import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const startBtn = document.querySelector("[data-start]");
// const currentDate = new Date();
const input = document.querySelector(`#datetime-picker`);
const days1 = document.querySelector("[data-days]");
const hours1 = document.querySelector("[data-hours]");
const minutes1 = document.querySelector("[data-minutes]");
const seconds1 = document.querySelector("[data-seconds]");
let timeCount = null;
let timeRemain = null;


startBtn.addEventListener("click", timerCalc); 

 
startBtn.disabled = true;
function timerCalc() {
  timeCount = setInterval (() => { 
    const currentDate = new Date(input.value);    
    const timeRemain = currentDate - Date.now();  
    const timeRemainMs = convertMs(timeRemain);    
    transform(timeRemainMs);
       console.log(timeRemainMs);
    console.log(currentDate);
  }, 1000);   
  
}
stopTime();
 
function stopTime() {
  if (timeRemain <= 0) 
    clearInterval(timeCount);
    startBtn.disabled = false;
  return

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
  days1.textContent = days;
  hours1.textContent = hours;
  minutes1.textContent = minutes;
  seconds1.textContent = seconds;
}




