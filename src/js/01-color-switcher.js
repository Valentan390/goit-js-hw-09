const body = document.querySelector('body');
const buttonStartEl = document.querySelector('[data-start]');
const buttonStopEl = document.querySelector('[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

buttonStopEl.setAttribute("disabled", '');

const onbuttonStart = () => {

    buttonStartEl.setAttribute("disabled", '');
    buttonStopEl.removeAttribute('disabled');
   
    timerId = setInterval(() => {

       let color = getRandomHexColor();
        body.style.backgroundColor = color;
    }, 1000);
};

buttonStartEl.addEventListener('click', onbuttonStart)

buttonStopEl.addEventListener("click", () => {

    buttonStartEl.removeAttribute('disabled');
    buttonStopEl.setAttribute("disabled", '');

    clearInterval(timerId);
  
});