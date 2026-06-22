// Toggle sliding panel actions (Desktop)
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});

// Toggle actions for mobile view
const mobileToSignup = document.getElementById('mobile-to-signup');
const mobileToSignin = document.getElementById('mobile-to-signin');

if (mobileToSignup) {
  mobileToSignup.addEventListener('click', () => {
    container.classList.add('right-panel-active');
  });
}

if (mobileToSignin) {
  mobileToSignin.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
  });
}

// Password visibility toggles
const passwordToggleButtons = document.querySelectorAll('.password-toggle');

passwordToggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    const inputField = button.parentElement.querySelector('.password-input');
    const isHidden = inputField.type === 'password';
    inputField.type = isHidden ? 'text' : 'password';
    button.style.opacity = isHidden ? '0.5' : '1';
  });
});

// Basic validation and submission logs
const signinForm = document.getElementById('signin-form');
const signupForm = document.getElementById('signup-form');

signinForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = signinForm.querySelector('input[type="email"]').value;
  const password = signinForm.querySelector('.password-input').value;
  console.log('Terracotta Portal Sign In:', { email, password });
  alert('Sign In trigger captured. Hook up your backend logic here!');
});

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = signupForm.querySelector('input[type="text"]').value;
  const email = signupForm.querySelector('input[type="email"]').value;
  const password = signupForm.querySelector('.password-input').value;
  console.log('Terracotta Portal Sign Up:', { name, email, password });
  alert('Sign Up trigger captured. Hook up your backend logic here!');
});
