import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const startBtn = document.querySelector("[data-start]");
const currentDate = new Date();
const input = document.querySelector(`#datetime-picker`);
const days = document.querySelector("[data-days]");
const hours = document.querySelector("[data-hours]");
const minutes = document.querySelector("[data-minutes]");
const seconds = document.querySelector("[data-seconds]");

startBtn.addEventListener("submit", (timerCalc) => {
  setInterval((timerCalc), 1000);
  currentDate = new Date(input.value);

  const currentDateInMs = currentDate.getTime();
  console.log(currentDate);
});
startBtn.disabled = true;
function timerCalc() {
  

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

const actualDate = Date.now();
const timeRemain = currentDate.getTime() - actualDate;

console.log(timeRemain);


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



