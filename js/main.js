console.log(
  "%cWesam%cBlog",
  "color:red; font-size:40px",
  "background-color:blue;color:white; font-size:40px"
);

/* Subscribe Form Validation */
let subscribeVaild = document.querySelector("#email");
document.forms[0].onsubmit = function (event) {
  let emailSubscribeValid = false;
  if (subscribeVaild !== "") {
    emailSubscribeValid = true;
    console.log("true");
  }
  if (emailSubscribeValid === false) {
    event.preventDefault();
    console.log("prevent");
  }
};
/* Request A Discount Form Validation */
document.forms[1].onsubmit = function (event) {
  let name = false;
  let email = false;
  let phone = false;
  let textArea = false;

  let nameInput = document.querySelector("#name");
  let emailInput = document.querySelector("#email");
  let phoneInput = document.querySelector("#phone");
  let userMessageInput = document.querySelector("#user-message");

  if (nameInput.value !== "") {
    name = true;
  }
  if (emailInput.value !== "") {
    email = true;
  }
  if (phoneInput.value !== "" && phoneInput.value.length < 10) {
    phone = true;
  }
  if (userMessageInput.value !== "" && userMessageInput.value.length < 250) {
    textArea = true;
  }

  if (
    name === false ||
    email === false ||
    phone === false ||
    textArea === false
  ) {
    event.preventDefault();
  }
};

let scroolBtn = document.querySelector(".to-top-butotn");
window.onscroll = function () {
  if (window.scrollY >= 623) {
    console.log("showed");
    scroolBtn.style.display = "block";
  } else scroolBtn.style.display = "none";
};
scroolBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    right: 4,
    behavior: "smooth",
  });
};
