const passwordInput = document.querySelector('.passwordInput')
const passwordCheck = document.querySelector('.passwordCheck')
const passwordResult = document.querySelector( '.CheckedOut')

const passwordRegexp = /^[1-2]\d{13}$/

passwordCheck.addEventListener('click', () =>{
    if (passwordRegexp.test(passwordInput.value)){
        passwordResult.innerText = 'ok';
        passwordResult.style.color = 'green';
    }else{
        passwordResult.innerText = 'not ok';
        passwordResult.style.color = 'red';
    }
})
