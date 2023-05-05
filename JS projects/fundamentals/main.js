//single element DOM selectors
const form = document.getElementById('my-form');
//query selectors selects other things than IDs
const query = document.querySelector('div');
//console.log(query);

//Multiple element DOM selectors
const multiple = document.querySelectorAll('div');
//console.log(multiple);


//changing the DOM
const lable = document.querySelector('.btn');
lable.style.background = 'red';

//Event listeners
// const btn = document.querySelector('.btn');

// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     //console.log('click');
//     document.querySelector('#my-form').style.background = '#ccc'
// })

//Form validation
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const list = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === ''){
        alert('Please enter field values');
    } else {
        const li = document.createElement('ul');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        list.appendChild(li);
    }
}