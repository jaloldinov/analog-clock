let second = 0;
let minute = 0;
let hour = 0;
let nowTime = new Date();

setInterval(function () {
  nowTime = new Date();
  //   360/60=6
  second = nowTime.getSeconds() * 6;
  //   360/60=6
  minute = nowTime.getMinutes() * 6;
  //   360/12=30
  hour = nowTime.getHours() * 30 + minute / 12;

  document.getElementById("sec-rotator").style.transform =
    "rotate(" + second + "deg)";

  document.getElementById("minute-rotator").style.transform =
    "rotate(" + minute + "deg)";

  document.getElementById("hour-rotator").style.transform =
    "rotate(" + hour + "deg)";
}, 1500);
