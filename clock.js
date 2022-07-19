function clock() {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  hour = checkTime(hour);
  minute = checkTime(minute);
  second = checkTime(second);

  document.getElementById('clock').innerHTML =
    hour + ':' + minute + ':' + second;
  setTimeout(clock, 1000);
}

function checkTime(t) {
  if (t < 10) return '0' + t;
  else return t;
}
