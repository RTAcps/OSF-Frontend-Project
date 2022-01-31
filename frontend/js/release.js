const secondsContainer = document.querySelector("#seconds");
const minutesContainer = document.querySelector("#minutes");
const hoursContainer = document.querySelector("#hours");
const daysContainer = document.querySelector("#days");
const mouthContainer = document.querySelector("#mouth");
const spinnerLoading = document.querySelector("#loading");
const countdownContainer = document.querySelector("#countdown");

const release = new Date().getMonth;

const releaseDate = new Date(`February 25 2022 12:00:00`);

const getTimeUnit = (unit) => (unit < 10 ? "0" + unit : unit);

const insertCountdownValues = ({ mouth, days, hours, minutes, seconds }) => {
  secondsContainer.textContent = getTimeUnit(seconds);
  minutesContainer.textContent = getTimeUnit(minutes);
  hoursContainer.textContent = getTimeUnit(hours);
  daysContainer.textContent = getTimeUnit(days);
  mouthContainer.textContent = getTimeUnit(mouth);
};

const updateCountdown = () => {
  const currentDate = new Date();
  const difference = releaseDate - currentDate;
  const mouth = Math.floor(difference / 1000 / 60 / 60 / 24 / 30);
  const days = Math.floor(difference / 1000 / 60 / 60 / 24);
  const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(difference / 1000 / 60) % 60;
  const seconds = Math.floor(difference / 1000) % 60;

  insertCountdownValues({ mouth, days, hours, minutes, seconds });
};

const handleCountdownDisplay = () => {
  spinnerLoading.remove();
  countdownContainer.style.display = "flex";
};

setTimeout(handleCountdownDisplay, 1000);

setInterval(updateCountdown, 1000);
