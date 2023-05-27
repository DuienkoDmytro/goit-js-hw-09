import Notiflix from 'notiflix';

const form = document.querySelector("form");
const formData = {};

function createPromise(position, delay) {

  
  const promise = new Promise((resolve, rejected) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });

    promise.then(result => {
      Notiflix.Notify.success(result);
    },
      error => {
        Notiflix.Notify.failure(error);
      }
    );
  }
const getItems = JSON.parse(localStorage.getItem('formData'));
let position = 1;
 
function submit(e) {
  e.preventDefault();  
}

for (let i = 1; i <= )
function onInputCreate(e) {
  formData[e.target.name] = e.target.value;

  localStorage.setItem('formData', JSON.stringify(formData));
};

form.addEventListener('submit', submit);
form.addEventListener('input', onInputCreate);
