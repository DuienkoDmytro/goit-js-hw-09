import Notiflix from 'notiflix';

const form = document.querySelector("form");
form.addEventListener('submit', submit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  })
}

function submit(e) {
  e.preventDefault();
  
  const { delay, step, amount } = e.currentTarget.elements;
  for (let i = 1; i <= amount.value; i++) {
    const delayPromice = Number(delay.value) + step.value * (i - 1);
    createPromise(i, delayPromice)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }form.reset();
}