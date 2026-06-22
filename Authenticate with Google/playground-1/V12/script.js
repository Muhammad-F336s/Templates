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
  console.log('Starfield Mainframe Access Gate Init');
  alert('CONNECT LINK trigger captured. Mainframe handshake secure!');
});

document.getElementById('signup-form').addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Starfield Registry Initialize Node');
  alert('INITIALIZE NODE trigger captured. New coordinate vectors configured!');
});

// Twinkling Starfield Particle Background Animation
const canvas = document.getElementById('starfield-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const stars = [];
  const numStars = 180;

  // Initialize star properties
  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5,
      twinkleOffset: Math.random() * 100,
      driftSpeed: 0.05 + Math.random() * 0.15
    });
  }

  function renderStarfield() {
    ctx.clearRect(0, 0, width, height);

    stars.forEach(star => {
      ctx.beginPath();
      // Calculate twinkling glow using sine wave
      const alpha = 0.2 + (Math.sin((Date.now() * 0.003 * star.driftSpeed) + star.twinkleOffset) + 1) * 0.4;
      ctx.fillStyle = `rgba(240, 245, 255, ${alpha})`;
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();

      // Slow galactic vertical drift upward
      star.y -= star.driftSpeed;
      if (star.y < 0) {
        star.y = height;
        star.x = Math.random() * width;
      }
    });

    requestAnimationFrame(renderStarfield);
  }

  renderStarfield();
}
