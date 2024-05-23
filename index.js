const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

const setHours = document.querySelector(".set-hour");
const setMinutes = document.querySelector(".set-minutes");
const setSeconds = document.querySelector(".set-seconds");

const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");

let stop = false;
setHours.addEventListener("change", () => {
  hours.textContent = setHours.value;
});
setMinutes.addEventListener("change", () => {
  minutes.textContent = setMinutes.value;
});
setSeconds.addEventListener("change", () => {
  seconds.textContent = setSeconds.value;
});

startBtn.addEventListener("click", startTimer);

stopBtn.addEventListener("click", () => {
  stop = true;
  hours.textContent = "00";
  minutes.textContent = "00";
  seconds.textContent = "00";
  setHours.textContent = "00";
  setMinutes.textContent = "00";
  setSeconds.textContent = "00";
});

function startTimer() {
  let hour = hours.textContent;
  let min = minutes.textContent;
  let sec = seconds.textContent;

  const interval = setInterval(() => {
    sec--;
    sec = sec < 10 ? "0" + sec : sec;
    if (sec == "0-1") {
      hour--;
      min--;
      sec = 59;
    }
    if ((hour=="00" && min == "00" && sec == "00") || (hour == 0 && min == 0 && sec == 0)) {
      clearInterval(interval);
      window.alert("ALARM IS DONE");
      setHours.value = "00";
      setMinutes.value = "00";
      setSeconds.value = "00";
    }

    if (stop) {
      clearInterval(interval);
      return
    }
    hours.textContent = hour;
    minutes.textContent = min;
    seconds.textContent = sec;
  }, 1000);
}