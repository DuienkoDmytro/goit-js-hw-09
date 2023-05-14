import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const startBtn = document.querySelector("[data-start]");


startBtn.addEventListener("click", flatpickr);
startBtn.disabled = true;

const days = document.querySelector("[data-days]");
const hours = document.querySelector("[data-hours]");
const minutes = document.querySelector("[data-minutes]");
const seconds = document.querySelector("[data-seconds]");


 
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
    localStorage.setItem('selectedTime', selectedDates[0].getTime());
    timerStatus = 1;
    }
    
   
    console.log(selectedDates[0]);
  },
};

flatpickr('#datetime-picker', options);   

const currentTime = (Date.now());
const selectedTime = localStorage.getItem('selectedTime', selectedDates[0].getTime())
const timeRemain = selectedTime - currentTime;

console.log(currentTime);

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



