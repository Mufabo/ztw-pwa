// Start with an initial value of 20 seconds
let timePassed = 0;

let timerIsRunning = false;
let paused = false;

var errorSound = new Audio('error.wav');

let internalTime = 0

let nextSideLeft = false // false=right, true=left. Determines which Side is to be clicked next
let counter = 1
let double_counter = false
let lastSideClicked = null;

settings = {
    "time_limit": 20,
    "dtn": 5,
    "time_to_timeout": 30
}
let timeLeft = settings.time_limit;

localStorage.setItem("ztwSettings", JSON.stringify(settings));

time_to_timeout = settings.time_to_timeout