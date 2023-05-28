import Notiflix from 'notiflix';

const form = document.querySelector("form");
const formData = {};

// function createPromise(position, delay) {
//   const promise = new Promise((resolve, rejected) => {
//     const shouldResolve = Math.random() > 0.3;
//     if (shouldResolve) {
//       resolve(`✅ Fulfilled promise ${position} in ${delay}ms`)
//     } else
//     {
//       rejected(`❌ Rejected promise ${position} in ${delay}ms`)
//     }
//   })
//   promise.then(result => {
//       Notiflix.Notify.success(result);
//   },
//     error => {
//     Notiflix.Notify.failure(error);
//     }
//   );
// };


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
  .then(result => {
      Notiflix.Notify.success(result);
  },
    error => {
    Notiflix.Notify.failure(error);
    }
  );
}


function submit(e) {
  e.preventDefault();
  const { delay, step, amount } = e.currentTarget.elements;
  for (let i = 1; i <= amount.value; i++) {
   
      
    
    if (amount < 1) {
      createPromise(delay)
      return
    }
   

    

    if (amount > 1) {
      createPromise(step, delay);
      clearInterval(intervalId);
    }
      
  }
}

// function onInputCreate(e) {
//   formData[e.target.name] = e.target.value;

//   localStorage.setItem('formData', JSON.stringify(formData));
// };

form.addEventListener('submit', submit);
// form.addEventListener('input', onInputCreate);


