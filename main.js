"use-strict"; /* strict mode */

/* Page Loading popup */
const loader = document.querySelector(".loader");
document.onreadystatechange = () => {
  switch (document.readyState) {
    case "complete":
      loader.classList.add("remove");
      let welcomePhrase = document.createElement("p");
      welcomePhrase.className = "welcome-phrase";
      welcomePhrase.style.cssText =
        "position: absolute; top: 0; left: 50%; transform: translateX(-50%); display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; background-image: var(--main-btn-gradient); color: #FFFFFF; font-weight: 600; letter-spacing: 3px; transition:0.3s ease-in-out; z-index:1000;";
      welcomePhrase.appendChild(
        document.createTextNode(
          `Welcome, I wish you a nice trip in my beautiful site`
        )
      );
      const welcomePhraseAppend = document.body.appendChild(welcomePhrase);
      setTimeout(() => {
        welcomePhraseAppend.style.display = "none";
      }, 2000);
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
/* Subscribe Form Validation */
const subscribeVaild = document.querySelector("#email");
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

const scroolBtn = document.querySelector(".to-top-butotn");
const stateSection = document.getElementById("stats");
const stats = document.querySelectorAll(".stats .num");
let started = false;
const section = document.querySelector(".skills");
const spans = document.querySelectorAll(".progress span");

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
