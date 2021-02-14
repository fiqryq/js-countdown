// Set date time
let launchDate = new Date("Feb 21 , 2022 12:00:00").getTime();
// set interval time
let timer = setInterval(tick, 1000);

function tick() {
  let now = new Date().getTime();

  let t = launchDate - now;

  if (t > 0) {
    // Days
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    if (days < 10) {
      days = "0" + days;
    }

    // Hours
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if (hours < 10) {
      hours = "0" + hours;
    }

    // mins
    let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    if (mins < 10) {
      mins = "0" + mins;
    }

    // secc
    let sec = Math.floor((t % (1000 * 60)) / 1000);
    if (sec < 10) {
      sec = "0" + sec;
    }

    let time = `${days} : ${hours} : ${mins} : ${sec}`;

    document.querySelector(".countdown").innerText = time;
  }
}
