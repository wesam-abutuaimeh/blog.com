const signUsingGoogle = document.querySelector(".sign-using-google"),
  signUsingFacebook = document.querySelector(".sign-using-facebook"),
  loginBtn = document.getElementById("submit-login-form");

//console.log(signUsingGoogle, signUsingFacebook);
signUsingGoogle.addEventListener("click", (_) => {
  window.open(
    "https://accounts.google.com/v3/signin/identifier?dsh=S-150225341%3A1663154733528468&continue=https%3A%2F%2Fmyaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dgo-to-account-button&service=accountsettings&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AQDHYWq5Qm86xxtJiLAesbzC9ox-EB02S_7jxRwWsZStf75PHygx0MFoKcJd0zweIAoohHJmQUbPkQ",
    "_blank",
    "width=500,height=500"
  );
});
signUsingFacebook.addEventListener("click", (_) => {
  window.open(
    "https://www.facebook.com/login",
    "_blank",
    "width=500,height=500"
  );
});
loginBtn.onclick = (e) => {
  e.preventDefault();
};
const password = document.querySelector("#password");
const passwordToggle = document.querySelector(".fa-eye");
passwordToggle.addEventListener("click", () => {
  if (password.getAttribute("type") === "password") {
    password.setAttribute("type", "text");
  } else password.setAttribute("type", "password");
});

const forgetPassword = document.querySelector(".forget-password-link");
const formSide = document.querySelector(".form-side");
// console.log('');
forgetPassword.addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementsByTagName("title")[0].textContent =
    "Forget Password Page";
  document.querySelector(".login-massage").textContent = "forget password!";
  document.querySelector('[type="password"]').style.display = "none";
  document.querySelector(".forget-password").style.display = "none";
  document.querySelector(".fa-eye").style.display = "none";
  document.querySelector(".forget-password-msg").style.display = "block";
  loginBtn.value = "send reset link";
  loginBtn.style.cssText =
    "background-color: #232c3b; border: 1px solid #3b4453;";
  document.querySelector(".other-sign-methods").style.visibility = "hidden";
  document.querySelector(".form-side-footer p").textContent = "go back to";
  document.querySelector(".form-side-footer a").textContent = "login";
});

// TODO => Page No -2- ===login && Register===
// TODO => Popup For Chating
