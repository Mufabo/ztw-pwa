// Start with an initial value of 20 seconds
let timePassed = 0;
let timerIsRunning = false;
let paused = false;

var errorSound = new Audio("error.wav");
var endSound = new Audio("tib.wav")

let internalTime = 0;

let nextSideLeft = false; // false=right, true=left. Determines which Side is to be clicked next
let counter = 1;
let double_counter = false;
let lastSideClicked = null;

let ztwSettings = JSON.parse(localStorage.getItem("ztwSettings"))

if (ztwSettings === null) {
  ztwSettings = {
    time_limit: 240,
    dtn: 5,
    time_to_timeout: 30,
  };

  localStorage.setItem("ztwSettings", JSON.stringify(ztwSettings));
} 




