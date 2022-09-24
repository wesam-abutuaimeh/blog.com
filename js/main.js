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
document.onreadystatechange = () =>
  !document.readyState === "complete" ? loader.classList.add("show") : "";

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

const loginBtnInBlog = document.querySelector(".login-btn ");

loginBtnInBlog.addEventListener("click", function () {
  const popup = document.createElement("div");
  popup.className = "popup";
  popup.style.cssText =
    "position: absolute; width:100%; height:100%; top: 50%;left: 50%; transform: translate(-50%,-50%); font-size: 50px; background-color: #ffffff52; padding: 20px; pointer-events: none; letter-spacing: 1px; z-index: 10;";
  const p = document.createElement("p");

  p.style.cssText =
    "position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); ";
  p.appendChild(document.createTextNode("Soon ... 😀"));
  popup.appendChild(p);
  let el = body.appendChild(popup);
  setTimeout(() => {
    el.remove();
    window.open("../Html/login.html");
  }, 2000);
});

let copyrightYear = new Date().getFullYear(); // Update CopyRight Year In Footer Automatically Depnd On Date Constructor
document.querySelector(".copyright-year").textContent = copyrightYear;

const targetDate = new Date("Dec 31 ,2022 11:59:59").getTime(); // Target Date //END

let interval = setInterval(() => {
  const currentDate = new Date().getTime(); // Start Date
  let elapsed = targetDate - currentDate;

  let years = Math.trunc(elapsed / (1000 * 60 * 60 * 24 * 365));
  let days = Math.trunc(elapsed / (1000 * 60 * 60 * 24));
  let hours = Math.trunc((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.trunc((elapsed % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.trunc((elapsed % (1000 * 60)) / 1000);

  document.querySelector(".years").innerHTML = years;
  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;

  elapsed == 0 ? clearInterval(interval) : "";
}, 1000);

//TODO => Validation On inputs actulay in Email Adress ,PhoneNo
