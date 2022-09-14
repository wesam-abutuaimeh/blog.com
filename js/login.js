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
// TODO => Page No -2- ===login && Register===
// TODO => Popup For Chating
