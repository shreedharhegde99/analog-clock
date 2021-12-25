const hoursElement = document.querySelector(".hour_hand");
const minutesElement = document.querySelector(".minute_hand");
const secondsElement = document.querySelector(".second_hand");

function showTime() {
  const date = new Date();

  const hour = date.getHours() + date.getMinutes() / 60;
  const minute = date.getMinutes() + date.getSeconds() / 60;
  const second = date.getSeconds() + date.getMilliseconds() / 1000;

  hoursElement.setAttribute("transform", `rotate(${30 * hour})`);
  minutesElement.setAttribute("transform", `rotate(${6 * minute})`);
  secondsElement.setAttribute("transform", `rotate(${6 * second})`);

  // showTime();
  // console.log(`${hour}    ${minute} ${second}`);
  // time();
}

window.onload = () => setInterval(showTime);
