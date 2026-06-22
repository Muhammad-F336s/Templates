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

const mobileToSignup = document.getElementById('mobile-to-signup');
const mobileToSignin = document.getElementById('mobile-to-signin');

if (mobileToSignup) mobileToSignup.addEventListener('click', () => container.classList.add('right-panel-active'));
if (mobileToSignin) mobileToSignin.addEventListener('click', () => container.classList.remove('right-panel-active'));

document.querySelectorAll('.password-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const input = button.parentElement.querySelector('.password-input');
    const isHidden = input.type === 'password';
    input.type = isHidden ? 'text' : 'password';
    button.style.opacity = isHidden ? '0.5' : '1';
  });
});

document.getElementById('signin-form').addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Zen Portal Sign In');
  alert('Sign In trigger captured. Hook up your backend logic here!');
});

document.getElementById('signup-form').addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Zen Portal Sign Up');
  alert('Sign Up trigger captured. Hook up your backend logic here!');
});
