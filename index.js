const hoursElement = document.querySelector(".hour_hand");
const minutesElement = document.querySelector(".minute_hand");
const secondsElement = document.querySelector(".second_hand");

function showTime() {
  const date = new Date();

  const hour = date.getHours() + date.getMinutes() / 60;
  const minute = date.getMinutes() + date.getSeconds() / 60;
  const second = date.getSeconds();

  hoursElement.setAttribute("transform", `rotate(${30 * hour})`);
  minutesElement.setAttribute("transform", `rotate(${6 * minute})`);
  secondsElement.setAttribute("transform", `rotate(${6 * second})`);

  // console.log(date.toLocaleTimeString());
}

function displayTime() {
  let display = document.querySelector(".display");
  const date = new Date();
  const localHours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const hours = localHours >= 12 ? localHours - 12 : localHours;
  const dayTime = localHours <= 12 ? "AM" : "PM";

  // console.log(hours + dayTime, minutes, seconds);
  let hr = hours < 10 ? `0${hours}` : hours;
	let min = minutes < 10 ? `0${minutes}` : minutes;
	let sec = seconds < 10 ? `0${seconds}` : seconds;
	display.textContent = `${hr} : ${min}  : ${sec} ${dayTime}`;
}

window.onload = () => {
  return setInterval(showTime, 1000), setInterval(displayTime, 1000);
}; 
