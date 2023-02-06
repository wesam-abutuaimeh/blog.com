"use-strict";

// Function For Traking Events
export function forEvents(startTrakingDate) {
  const targetDate = new Date(startTrakingDate).getTime();
  const interval = setInterval(() => {
    const currentDate = new Date().getTime(); // Start Date
    const elapsed = targetDate - currentDate;
    const years = Math.trunc(elapsed / (1000 * 60 * 60 * 24 * 365));
    const days = Math.trunc(elapsed / (1000 * 60 * 60 * 24));
    const hours = Math.trunc(
      (elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.trunc((elapsed % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.trunc((elapsed % (1000 * 60)) / 1000);
    document.querySelector(".years").innerHTML = years;
    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;
    elapsed < 0 ? clearInterval(interval) : "";
  }, 1000);
}
