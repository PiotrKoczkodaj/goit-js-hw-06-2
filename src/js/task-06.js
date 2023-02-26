const input = document.querySelector('#validation-input');
const length = input.getAttribute('data-length');

const handler = () => {
    
    if (input.value.length > length) {
        input.classList.add('valid') || input.classList.replace('invalid','valid')
    } else {
       input.classList.replace('valid','invalid') || input.classList.add('invalid')
    }
    
}

input.addEventListener('blur',handler)