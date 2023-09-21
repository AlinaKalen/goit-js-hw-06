


const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', function (event) { event.preventDefault();
  
    const email = this.elements.email.value;
  const password = this.elements.password.value;

  if (email.trim() === '' || password.trim() === '') {
    alert('Всі поля повинні бути заповнені!');
    return; }

    const formData = {  email, password, };


    console.log(formData);
    this.reset();
});
