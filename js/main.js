"use-strict";
/* Variables Declrations [roots] */
const loader = document.querySelector(".loader"),
  settingBox = document.querySelector(".setting-box"),
  subscribeVaild = document.querySelector("#email"),
  scroolBtn = document.querySelector(".to-top-butotn"),
  stateSection = document.getElementById("stats"),
  stats = document.querySelectorAll(".stats .num"),
  section = document.querySelector(".skills"),
  spans = document.querySelectorAll(".progress span"),
  body = document.querySelector("body"),
  toggleBtn = document.querySelector(".toggle-btn"),
  getMood = window.localStorage.getItem("mode");

/* Page Loading popup */
// TODO => Enhancment Code [ESC button]
document.onreadystatechange = () => {
  switch (document.readyState) {
    case "complete":
      loader.classList.add("remove");
      break;
    case "interactive":
      loader.classList.add("show");
      break;
    case "loading":
      loader.classList.add("show");
      break;
  }
};

/* Welcome phrase to the user who opens the browser console */
console.log(
  "%cWelcom To Wesam%cBlog",
  "color:red; font-size:40px",
  "background-color:blue;color:white; font-size:40px"
);

/* colors option from setting box */

document.querySelector(".icon").onclick = (_) => {
  settingBox.classList.toggle("show");
  icon.classList.toggle("fa-spin");
};

if (localStorage.getItem("colors")) {
  document.documentElement.style.setProperty(
    "--main-color",
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
      "--main-color",
      event.target.dataset.color
    );
    localStorage.setItem("colors", event.target.dataset.color);
  });
});

/* Subscribe Form Validation */

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
const userName = document.getElementById("name"),
  email = document.getElementById("email"),
  phoneNo = document.getElementById("phone"),
  textArea = document.getElementById("user-message");

document.forms[1].onsubmit = function (e) {
  if (
    userName.value === "" ||
    email.value === "" ||
    phoneNo.value === "" ||
    textArea.value === ""
  )
    e.preventDefault();
  //TODO => Validation On inputs actulay in Email Adress ,PhoneNo,
};

//  in stats section
let started = false;
function increaseNums(element) {
  const goal = element.dataset.goal;
  const counter = setInterval(() => {
    element.textContent++;
    if (element.textContent === goal) {
      clearInterval(counter);
    }
  }, 500 / goal);
}

window.onscroll = function () {
  if (window.scrollY >= 623) {
    scroolBtn.style.display = "block";
  } else scroolBtn.style.display = "none";
  scroolBtn.onclick = function () {
    window.scrollTo({
      top: 0,
      right: 4,
      behavior: "smooth",
    });
  };

  if (window.scrollY >= stateSection.offsetTop) {
    if (!started) {
      stats.forEach((stats) => {
        increaseNums(stats);
      });
    }
    started = true;
  }

  if (window.scrollY >= section.offsetTop) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};

/* Add Dark Mood In Setting */
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  toggleBtn.classList.toggle("active");
  if (!body.classList.contains("dark")) {
    return window.localStorage.setItem("mode", "light");
  }
  window.localStorage.setItem("mode", "dark");
});
if (getMood && getMood === "dark") {
  body.classList.add("dark");
  toggleBtn.classList.add("active");
}

// TODO => Page No -2- ===login && Register===