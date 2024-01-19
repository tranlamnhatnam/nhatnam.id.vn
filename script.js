const clockData = {
  time: "",
  date: "",
};

const daysOfWeek = ["CHỦ NHẬT", "THỨ HAI", "THỨ BA", "THỨ TƯ", "THỨ NĂM", "THỨ SÁU", "THỨ BẢY"];
const updateTimerID = setInterval(updateTime, 1000);
updateTime();

function updateTime() {
  const currentDate = new Date();
  clockData.time =
    formatTime(currentDate.getHours()) +
    ":" +
    formatTime(currentDate.getMinutes()) +
    ":" +
    formatTime(currentDate.getSeconds());
  clockData.date =
    daysOfWeek[currentDate.getDay()] +
    " " +
    formatTime(currentDate.getDate()) +
    "/" +
    formatTime(currentDate.getMonth() + 1) +
    "/" +
    formatTime(currentDate.getFullYear());

  const timeOriginElement = document.querySelector("#time .origin");
  const timeCloneElement = document.querySelector("#time .clone");
  const dateElement = document.getElementById("date");

  timeOriginElement.textContent = clockData.time;
  timeCloneElement.textContent = clockData.time;
  dateElement.textContent = clockData.date;
}

function formatTime(value) {
  const digit = 2;
  const zero = "0".repeat(digit);
  return (zero + value).slice(-digit);
}
