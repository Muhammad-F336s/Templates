// Toggle sliding panel actions (Desktop)
const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

// Toggle actions for mobile view
const mobileToSignup = document.getElementById("mobile-to-signup");
const mobileToSignin = document.getElementById("mobile-to-signin");

mobileToSignup.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

mobileToSignin.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

// Password visibility toggles
const passwordToggleButtons = document.querySelectorAll(".password-toggle");

passwordToggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const inputField = button.parentElement.querySelector(".password-input");
    const eyeIcon = button.querySelector(".eye-icon");

    if (inputField.type === "password") {
      inputField.type = "text";
      // Change opacity to show active view
      eyeIcon.style.opacity = "0.5";
    } else {
      inputField.type = "password";
      eyeIcon.style.opacity = "1";
    }
  });
});

// Basic validation and submission logs
const signinForm = document.getElementById("signin-form");
const signupForm = document.getElementById("signup-form");

signinForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = signinForm.querySelector('input[type="email"]').value;
  const password = signinForm.querySelector(".password-input").value;
  console.log("Sign In Attempt:", { email, password });
  // Simple local sign-in: store minimal profile and redirect to dashboard
  const inferredName = email.split('@')[0].replace(/[._\d]+/g, ' ');
  const profile = {
    name: inferredName || 'User',
    email: email,
    picture: `https://ui-avatars.com/api/?name=${encodeURIComponent(inferredName)}&background=4b1f6b&color=fff&size=256`
  };
  localStorage.setItem('profile', JSON.stringify(profile));
    window.location.href = "../Dashboard/dashboard.html";
});

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = signupForm.querySelector('input[type="text"]').value;
  const email = signupForm.querySelector('input[type="email"]').value;
  const password = signupForm.querySelector(".password-input").value;
  console.log("Sign Up Attempt:", { name, email, password });
  // Save profile locally and (optionally) post to backend
  const profile = {
    name: name || email.split('@')[0],
    email: email,
    picture: `https://ui-avatars.com/api/?name=${encodeURIComponent(name || email)}&background=4b1f6b&color=fff&size=256`
  };
  localStorage.setItem('profile', JSON.stringify(profile));
  // Optionally: POST to backend /api/users here
    window.location.href = "../Dashboard/dashboard.html";
});

const Backend_Url = "http://localhost:5000/api/server/health";

async function GetBackendResponse() {
  fetch(Backend_Url)
    .then((response) => {
      // Pehle check karo response sahi aya ya nahi
      if (!response.ok) {
        throw new Error("Network response mein masla hai");
      }
      return response.json(); // Data ko JSON mein convert karo
    })
    .then((data) => {
      console.log("Backend se aya hua data:", data);
      // Yahan tum HTML/DOM ko update kar sakte ho
    })
    .catch((error) => {
      console.error("Fetch operation mein error:", error);
    });
}

GetBackendResponse(); // Page load hone par backend health check karo

// Google Authentication setup

let client;
function handleCredentialResponse(response) {
  console.log("Google Full Response:", response);

  if (response.access_token) {
    // console.log("Access Token:", response.access_token);
    const accessToken = response.access_token;
    const getUserInfoUrl = "https://www.googleapis.com/oauth2/v3/userinfo";

    fetch(getUserInfoUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((userInfo) => {
        console.log("User Info:", userInfo);
        // Store profile with keys expected by dashboard
        const userProfile = {
          name: userInfo.name,
          email: userInfo.email,
          picture: userInfo.picture,
        };

        localStorage.setItem("profile", JSON.stringify(userProfile));

        // Redirect to dashboard (relative to this file)
          window.location.href = "../Dashboard/dashboard.html";
      })
      .catch((error) => {
        console.error("User info fetch mein error:", error);
      });
    alert("Google Sign In successful! Check console for token details.");
  } else {
    console.error("Token not found!");
  }
}

window.onload = function () {
  client = google.accounts.oauth2.initTokenClient({
    client_id: `707684842309-kuugtvgq0v8cd073vj7632hp3s021lg0.apps.googleusercontent.com`,
    scope:
      "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
    callback: handleCredentialResponse,
  });

  document.getElementById("customGoogleBtn").onclick = () => {
    client.requestAccessToken();
  };
  google.accounts.id.prompt();
};
