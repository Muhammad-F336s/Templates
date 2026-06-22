// Dashboard script: load profile from localStorage, set avatar/name/email, provide logout
document.addEventListener('DOMContentLoaded', () => {
  const nameEl = document.getElementById('profile-name');
  const emailEl = document.getElementById('profile-email');
  const avatarEl = document.getElementById('avatarImg');
  const placeholder = 'https://via.placeholder.com/320x320.png?text=Avatar';

  function setAvatar(url) {
    avatarEl.src = url || placeholder;
  }

  function resolveProfile() {
    // 1) try JSON profile
    const raw = localStorage.getItem('profile');
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object') return parsed;
      } catch (err) {
        console.warn('profile JSON parse failed', err);
      }
    }

    // 2) try individual keys
    const variants = {
      name: ['name', 'userName', 'user_name', 'username', 'user', 'userName'],
      email: ['email', 'userEmail', 'user_email', 'useremail', 'emailAddress'],
      picture: ['picture', 'userPic', 'user_pic', 'userpic', 'avatar', 'user_image']
    };

    const out = {};
    let found = false;
    for (const key of Object.keys(variants)) {
      for (const v of variants[key]) {
        const val = localStorage.getItem(v);
        if (val) {
          out[key] = val;
          found = true;
          break;
        }
      }
    }
    return found ? out : null;
  }

  try {
    const p = resolveProfile();
    console.log('Dashboard profile resolved:', p);
    if (p) {
      const name = p.name || p.userName || p.username || p.user;
      const email = p.email || p.userEmail || p.useremail || p.emailAddress;
      const picture = p.picture || p.userPic || p.userpic || p.avatar || p.user_image;

      if (name) nameEl.textContent = name;
      if (email) emailEl.textContent = email;

      if (picture) setAvatar(picture);
      else setAvatar(`https://ui-avatars.com/api/?name=${encodeURIComponent(name||email||'User')}&background=4b1f6b&color=fff&size=512`);
    } else {
      console.log('No profile found in localStorage');
      setAvatar(placeholder);
    }
  } catch (err) {
    console.warn('Error resolving profile', err);
    setAvatar(placeholder);
  }

  // fallback when image fails to load
  avatarEl.addEventListener('error', () => {
    console.warn('Avatar image failed to load; using placeholder');
    avatarEl.src = placeholder;
  });

  // logout button
  const logoutBtn = document.createElement('button');
  logoutBtn.className = 'btn-logout';
  logoutBtn.textContent = 'Log out';
  logoutBtn.addEventListener('click', () => {
    console.log('Logout clicked');
    // clear common keys
    const keysToClear = ['profile','userName','userEmail','userPic','user_name','user_email','user_pic','userpic'];
    keysToClear.forEach(k => localStorage.removeItem(k));
    // redirect to login page
    window.location.href = '../LoginPage/index.html';
  });
  const card = document.querySelector('.profile-card');
  if (card) card.appendChild(logoutBtn);
});
