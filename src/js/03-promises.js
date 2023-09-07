import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');

const onSubmitForm = element => {

  element.preventDefault();
  
  let delay = Number(element.target.delay.value);
  const amount = Number(element.target.amount.value);
  let step = Number(element.target.step.value);

  console.log(delay)
  console.log(amount)
  console.log(step)


  for (let index = 1; index < amount + 1; index++) {
    createPromise(index, delay)
      
     .then(({position, delay}) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    
    delay += step
  }
}

formEl.addEventListener('submit', onSubmitForm);

function createPromise(position, delay) {
 
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        // Fulfill
        resolve({position, delay})
      } else {
        // Reject
        reject({position, delay})
      }
    }, delay);
  });

  return promise;
}
