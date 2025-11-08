'strict mode'

import main from "./src/js/main.js";
import correct from "./src/js/correct.js";

const body = document.querySelector('body');

let currentNum;
let state = main();
body.insertAdjacentHTML('afterbegin', state);

const submitBtn = document.querySelector('.submit');
const options = document.querySelector('.options');

const mainHtml = function () {
    options.addEventListener('click', function (e) {
        let element = e.target;
        const numbers = options.querySelectorAll('.numbers');
        if (!element.classList.contains('numbers')) return
        numbers.forEach(num => {
            if (num === e.target) return;
            num.classList.remove('active-number');
        })
        element.classList.toggle('active-number');
        currentNum = element.dataset.number;
        if (!element.classList.contains('active-number'))
            currentNum = undefined;
    });
};
mainHtml();

submitBtn.addEventListener('click', function () {
    if (!currentNum) {
        alert('please enter your opinion');
        return;
    };
    body.innerHTML = '';
    state = correct();
    body.insertAdjacentHTML('afterbegin', state);
    const ownTotal = document.querySelector('.ownTotal');
    ownTotal.textContent = `You selected ${currentNum} of 5`;
});

