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

document.onreadystatechange = () => {
  switch (document.readyState) {
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
