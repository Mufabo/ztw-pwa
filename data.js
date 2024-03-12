// Start with an initial value of 20 seconds
let timePassed = 0;

let timerIsRunning = false;
let paused = false;

var errorSound = new Audio("error.wav");

let internalTime = 0;

let nextSideLeft = false; // false=right, true=left. Determines which Side is to be clicked next
let counter = 1;
let double_counter = false;
let lastSideClicked = null;
let ztwSettings = JSON.parse(localStorage.getItem("ztwSettings"))

if (ztwSettings === null) {
  ztwSettings = {
    time_limit: 20,
    dtn: 5,
    time_to_timeout: 11,
  };

  localStorage.setItem("ztwSettings", JSON.stringify(ztwSettings));
} 

let timeLeft = ztwSettings.time_limit;

time_to_timeout = ztwSettings.time_to_timeout;
