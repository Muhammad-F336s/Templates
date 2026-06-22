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
    button.textContent = isHidden ? '_HIDE' : '_SHOW';
  });
});

document.getElementById('signin-form').addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Cyber Interface Decrypt Init');
  alert('DECRYPT trigger captured. Secure mainframe handshake initiated!');
});

document.getElementById('signup-form').addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Cyber Interface Initialize Node');
  alert('INITIALIZE trigger captured. Deploying new secure cluster address!');
});

// Matrix Cyber Rain Background
const canvas = document.getElementById('cyber-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const charSize = 16;
  const columns = Math.floor(width / charSize) + 1;
  const yPositions = Array(columns).fill(0);

  // Characters used for rain (Cyberpunk hex/binary/matrix feel)
  const chars = '0123456789ABCDEF@#$%&+*¥';

  function drawMatrixRain() {
    ctx.fillStyle = 'rgba(7, 7, 10, 0.08)'; // Matches --bg-cyber with alpha
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#00ff66'; // Glowing Green
    ctx.font = charSize + 'px monospace';

    yPositions.forEach((y, index) => {
      const text = chars.charAt(Math.floor(Math.random() * chars.length));
      const x = index * charSize;
      
      // Introduce random variation for color cyan/magenta occasionally
      if (Math.random() > 0.98) {
        ctx.fillStyle = '#00e5ff'; // Cyan
      } else if (Math.random() > 0.99) {
        ctx.fillStyle = '#ff00ff'; // Magenta
      } else {
        ctx.fillStyle = '#00ff66'; // Green
      }

      ctx.fillText(text, x, y);

      if (y > 100 + Math.random() * 10000) {
        yPositions[index] = 0;
      } else {
        yPositions[index] = y + charSize;
      }
    });
  }

  setInterval(drawMatrixRain, 40);
}
