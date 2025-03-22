function meditate() {
  if (timerIsRunning) {

    if (nextSideLeft) {
      // the next side to be clicked is left
      if (lastSideClicked == "left") {
        clickedCorrectly();
      } else {
        misclicked(
          "error. You clicked right instead of left. Current DTN: " + currentDTN
        );
      }
    } else {
      // next side to be clicked is right
      if (lastSideClicked == "right") {
        clickedCorrectly();
      } else {
        misclicked(
          "error. You clicked left instead of right. Current DTN: " + currentDTN
        );
      }
    }
  }
}

const misclicked = (message) => {
  console.log(message);
  if(canVibrate) navigator.vibrate(200);
  currentDTN = ztwSettings.dtn;
  counter = 1;
  lastSideClicked = null;
  errorSound.play();
};

const clickedCorrectly = () => {
  lastSideClicked = null; // reset
  if (nextSideLeft) {
    console.log("left side clicked correctly. counter: " + counter + " currentDTN: "+ currentDTN);
  } else {
    console.log("right side clicked correctly. counter: " + counter + " currentDTN: "+ currentDTN);
  }
  if (counter < currentDTN) {
    // single tap expected
    counter++; // increase the counter to dtn
    nextSideLeft = !nextSideLeft; // next tap is expected on the other side
  } else {
    // current side is to be clicked twice
    if (!double_counter) {
      // first of double counter
      // counter == dtn
      double_counter = true;
      if (nextSideLeft) {
        console.log("next is again left!");
      } else {
        console.log("next is again right!");
      }
    } else {
      // second click of double done correctly
      counter = 1;
      double_counter = false;
      nextSideLeft = !nextSideLeft;
      if (currentDTN < ztwSettings.cascade) {
        currentDTN = currentDTN+1;
      } else {
        currentDTN = ztwSettings.dtn;
      }
    }
  }
};
