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
    button.textContent = isHidden ? '👁' : '🔒'; // swap icon or state
  });
});

document.getElementById('signin-form').addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Royal Portal Authentication Init');
  alert('AUTHENTICATE trigger captured. Imperial records key validated!');
});

document.getElementById('signup-form').addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Royal Portal Registry Sign Up');
  alert('REGISTER trigger captured. Signature seal successfully recorded!');
});

// Interactive Mechanical Gears Shift
const gear1 = document.getElementById('gear-1');
const gear2 = document.getElementById('gear-2');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  // Gently shift gears to give 3D depth parallax effect
  if (gear1) {
    gear1.style.transform = `translate(${x * 12}px, ${y * 12}px)`;
  }
  if (gear2) {
    gear2.style.transform = `translate(${-x * 18}px, ${-y * 18}px)`;
  }
});
