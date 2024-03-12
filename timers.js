// Initially, no time has passed, but this will count up
// and subtract from the TIME_LIMIT

var timer = document.getElementById("timer");
timer.innerText = `Start/Pause: ${ztwSettings.time_limit}`;

function formatTime(time) {
  // The largest round integer less than or equal to the result of time divided being by 60.
  const minutes = Math.floor(time / 60);

  // Seconds are the remainder of the time divided by 60 (modulus operator)
  let seconds = time % 60;

  // If the value of seconds is less than 10, then display seconds with a leading zero
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  // The output in MM:SS format
  return `${minutes}:${seconds}`;
}

function startTimer() {
  if (!timerIsRunning) {
    timerIsRunning = true;

    timerInterval = setInterval(() => {
      if (!paused) {
        timePassed = timePassed += 1;
        timeLeft = ztwSettings.time_limit - timePassed;
        timer.innerHTML = formatTime(timeLeft);
      }

      if (timeLeft == 0) {
        clearInterval(timerInterval);
        timerIsRunning = false;
        timePassed = 0;
        timer.innerText = `Start: ${ztwSettings.time_limit}`;
      }
    }, 1000);

    //meditationInterval = setInterval(meditate, 500);

    // timer for time out
    internalTimer = setInterval(() => {
      if (!paused) {
        internalTime = internalTime += 1;
        internalTimeLeft = ztwSettings.time_to_timeout - internalTime;
      }
      if (internalTimeLeft == 0) {
        internalTime = 0;
        alert("FOCUS")
      }
      if(!timerIsRunning){
        clearInterval(internalTimer);
      }
    }, 1000);
  }
}

// TODO pause timer, stop timer, inner timer
