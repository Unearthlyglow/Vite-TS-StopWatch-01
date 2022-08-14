import "../src/Sass/main.scss";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="header">
    <h1>Stop Watch</h1>
    <h2> Vanilla + <span>Vite<span> </h2>
</div>
  
<div id="watch">00:00:00</div>
  <div class="Button_container"> 
  <button id="button-start">Start</button>
  <button id="button-stop">Stop</button>
  <button id="button-reset">Reset</button>
  </div>


`;

//BREAK Variables:
const time_el = document.getElementById("watch");
const buttonStart = document.getElementById("button-start");
const buttonStop = document.getElementById("button-stop");
const buttonReset = document.getElementById("button-reset");
let seconds = 0;
let interval: number | null | undefined = null;

//BREAK Event Listeners:
buttonStart!.addEventListener("click", start);
buttonStop!.addEventListener("click", stop);
buttonReset!.addEventListener("click", reset);

function timer() {
  seconds++;

  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds - hrs * 3600) / 60);
  let secs = seconds % 60;

  if (secs < 10) secs = "0" + secs;
  if (mins < 10) mins = "0" + mins;
  if (hrs < 10) hrs = "0" + hrs;

  time_el.innerText = `${hrs}:${mins}:${secs}`;
}

function start() {
  if (interval) {
    return;
  }
  interval = setInterval(timer, 1000);
}

function stop() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  stop();
  seconds = 0;
  time_el.innerText = "00:00:00";
}
