/*setInterval(function clock() {
  let h = document.getElementById("hour");
  let m = document.getElementById("minute");
  let s = document.getElementById("second");
  let machine = document.getElementById("clock-machine");
  let time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();
  let hourRotation = (hour * 30) + (minute / 2) + (second / 120);
  let minuteRotation = (minute * 6) + (second / 10);
  let secondRotation = (second * 6);
  h.style.transform = "rotate(" + hourRotation + "deg)";
  m.style.transform = "rotate(" + minuteRotation + "deg)";
  s.style.transform = "rotate(" + secondRotation + "deg)";
  console.log(Date());
}, 1000);*/

function clock() {
  let h = document.getElementById("hour");
  let m = document.getElementById("minute");
  let s = document.getElementById("second");
  let machine = document.getElementById("clock-machine");
  let time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();
  let hourRotation = (hour * 30) + (minute / 2) + (second / 120);
  let minuteRotation = (minute * 6) + (second / 10);
  let secondRotation = (second * 6);
  let clockmachine = [
    "@keyframes hour {from{transform: rotate(" + hourRotation + "deg);}to{transform: rotate(" + (hourRotation + 360) + "deg);}}", 
    "@keyframes minute {from{transform: rotate(" + minuteRotation + "deg);}to{transform: rotate(" + (minuteRotation + 360) + "deg);}}", 
    "@keyframes second {from{transform: rotate(" + secondRotation + "deg);}to{transform: rotate(" + (secondRotation + 360) + "deg);}}"
    ].join("");
  machine.innerHTML = clockmachine;
  console.log(Date());
}
//clock();