// Initially, no time has passed, but this will count up
// and subtract from the TIME_LIMIT


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
  console.log("Start")
  console.log(ztwSettings)
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
        nextSideLeft = false; // false=right, true=left. Determines which Side is to be clicked next
        counter = 1;
        double_counter = false;
        lastSideClicked = null;
        endSound.play()
      }
    }, 1000);

    // timer for time out
    internalTimer = setInterval(() => {
      if (!paused) {
        internalTime = internalTime += 1;
        internalTimeLeft = ztwSettings.time_to_timeout - internalTime;
      }
      if (internalTimeLeft == 0) {
        internalTime = 0;
        errorSound.play()
        counter = 1
        double_counter = false;
        console.log("next side: " + nextSideLeft ? "left" : "right")
        alert("FOCUS")
      }
      if(!timerIsRunning){
        clearInterval(internalTimer);
      }
    }, 1000);
  }
}

function pause(){
  paused = !paused
}

function stopTimer(){
  clearInterval(timerInterval);
  timerIsRunning = false;
  timePassed = 0;
  timer.innerText = `Start: ${ztwSettings.time_limit}`;
  nextSideLeft = false
}
// TODO pause timer, stop timer, inner timer
