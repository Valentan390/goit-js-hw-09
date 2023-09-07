import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css"
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputDate = document.querySelector('#datetime-picker');
const buttonStart = document.querySelector('[data-start]');
const divTimer = document.querySelector('.timer');
const spanDays = document.querySelector('[data-days]');
const spanHours = document.querySelector('[data-hours]');
const spanMinutes = document.querySelector('[data-minutes]');
const spanSeconds = document.querySelector('[data-seconds]');

divTimer.style.marginTop = "10px";
divTimer.style.display = "flex";
divTimer.style.gap = "10px";

buttonStart.setAttribute("disabled", '');

let selectedDate;
let timerId = null;


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
};

const addLeadingZero = (value) => {
    return String(value).padStart(2, '0');
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      
      if (selectedDates[0] < Date.now()) {
       
         return Notify.failure('Please choose a date in the future');
      } else {
          buttonStart.removeAttribute('disabled');
          selectedDate = selectedDates[0];
           clearInterval(timerId)
      }
  },
};

flatpickr(inputDate, options);

const onButtonStart = () => {

    buttonStart.setAttribute("disabled", '');
    
    timerId = setInterval(() => {
        
        const timeLeft = selectedDate - Date.now();
        
        formatDate = convertMs(timeLeft);
        
        if (timeLeft <= 0) {

            Notify.success('Time end');
            clearInterval(timerId);
            return;
        }

        spanMinutes.textContent = addLeadingZero(formatDate.minutes);
        spanHours.textContent = addLeadingZero(formatDate.hours);
        spanDays.textContent = addLeadingZero(formatDate.days);
        spanSeconds.textContent = addLeadingZero(formatDate.seconds);
        
    }, 1000)
}

buttonStart.addEventListener('click', onButtonStart);


