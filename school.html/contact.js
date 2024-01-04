const form = document.getElementsById('Contact');
const firstname = document.getElementById('fname');
const secondname = document.getElementsById('lname');
const email = document.getElementById('Email');
const  suggestions = document.getElementById('subject');
form.addEventListner( 'submit', e =>{
    e.preventDefualt();

    validateInputs();

});

const setError = (element,message ) =>{
    const inputControl =element.parentElement;
    const errorDisplay =inputControl.querySelector('.error');

    errorDisplay.innerText =message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
  }   
const setSuccess = element  => {
    const inputControl =element.parentElement;
    const errorDisplay =inputControl.querySelector('.error');
    
    errorDisplay.innerText ='';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');



const isValidEmail = email =>{
    
}    
};
const validateInputs = () => {
    const firstnameValue = firstname.value.trim();
    const secondnameValue =secondname.value.trim();
    const email = email.value.trim();
    const  suggestions = suggestions.Value.trim();

    if(firstnameValue === '') {
        setError(firstname,'First name required' );
         } else  {
        setSuccess( firstname);
    }
    if(emailValue === ''){
        setError(email, 'Email is required');
    }
};