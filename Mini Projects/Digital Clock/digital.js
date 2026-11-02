function updateClock() {
  //get current update
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  const ampm = hours >= 12 ? " PM" : " AM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const timeString = hours + ":" + minutes + ":" + seconds + ampm;

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const dateString = now.toLocaleDateString("en-US", options);

  const days = [
    "Sunday",
    "Monday",
    "Tueday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dayString = days[now.getDay()];

  document.getElementById("clock").textContent = timeString;
  document.getElementById("date").textContent = dateString;
  document.getElementById("day").textContent = dayString;
}

updateClock();

setInterval(updateClock(), 1000);
