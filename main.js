"use-strict"; /* strict mode */

/* Welcome phrase to the user who opens the browser console */
console.log(
  "%cWelcom To Wesam%cBlog",
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

/* Scroll To Top Button */
let scroolBtn = document.querySelector(".to-top-butotn");
window.onscroll = function () {
  if (window.scrollY >= 623) {
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

/* colors option from setting box */
document.querySelector(".icon").onclick = (_) => {
  const settingBox = document.querySelector(".setting-box");
  settingBox.classList.toggle("show");
};

if (localStorage.getItem("colors")) {
  document.documentElement.style.setProperty(
    "--main-color-",
    localStorage.getItem("colors")
  );
  console.log(
    `The Hex Code For The Color I present Now Is \`${localStorage.getItem(
      "colors"
    )}\``
  );
}

let colorsList = document.querySelectorAll(".colors-options li");
colorsList.forEach((li) => {
  li.addEventListener("click", (event) => {
    document.documentElement.style.setProperty(
      "--main-color-",
      event.target.dataset.color
    );
    localStorage.setItem("colors", event.target.dataset.color);
  });
});
