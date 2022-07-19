function clock() {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  document.getElementById('clock').innerHTML =
    hour + ':' + minute + ':' + second;
  setTimeout(clock, 1000);
}
