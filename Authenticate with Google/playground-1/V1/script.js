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
  alert("Sign In trigger captured. Hook up your backend logic here!");
});

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = signupForm.querySelector('input[type="text"]').value;
  const email = signupForm.querySelector('input[type="email"]').value;
  const password = signupForm.querySelector(".password-input").value;

  console.log("Sign Up Attempt:", { name, email, password });
  alert("Sign Up trigger captured. Hook up your backend logic here!");
});

// Google Authentication setup

let client;

// function handleCredentialResponse(response) {
//   if (response.credentials) {
//     console.log("Encoded JWT ID token:", response.credentials);
//     alert("Google Sign In successful. Check console for token details.");
//   }
// }
function handleCredentialResponse(response) {
  console.log("Google Full Response:", response); // Pura response check karne ke liye

  // OAuth2 mien response.access_token aata hai, credentials nahi!
  if (response.access_token) {
    console.log("Access Token:", response.access_token);
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
    client.requestAccessToken(); // Yeh line Google ka Auth popup khole gi
  };
  google.accounts.id.prompt(); // Display the One Tap prompt
};
