function meditate() {
  if (timerIsRunning) {
    if (nextSideLeft) {
      // the next side to be clicked is left
      if (lastSideClicked == "left") {
        lastSideClicked = null; // reset
        console.log("left side clicked correctly. counter: " + counter);
        if (counter < ztwSettings.dtn) {
          // single tap expected
          counter++; // increase the counter to dtn
          nextSideLeft = false; // next tap is expected on the right side
        } else {
          // left side is to be clicked twice
          if (!double_counter) {
            // first of double counter
            // nextSideLeft is true
            // counter == dtn
            double_counter = true;
            console.log("next is again left!")
          } else {
            // second click of double done correctly
            counter = 1;
            double_counter = false;
            nextSideLeft = false;
          }
        }
      } else {
        // Left side was supposed to be clicked
        console.log("error. You clicked right instead of left");
        navigator.vibrate(200)
        counter = 1;
        lastSideClicked = null;
        errorSound.play()
      }
    } else {
      // next side to be clicked is right
      if (lastSideClicked == "right") {
        console.log("right side clicked correctly. counter: " + counter);
        lastSideClicked = null;
        if (counter < ztwSettings.dtn) {
          // single tap expected
          counter++;
          nextSideLeft = true;
        } else {
          if (!double_counter) {
            double_counter = true;
            console.log("next is again right!")
          } else {
            counter = 1;
            double_counter = false;
            nextSideLeft = true;
          }
        }
      } else {
        console.log("error. You clicked left instead of right");
        navigator.vibrate(200)
        counter = 1;
        lastSideClicked = null;
        errorSound.play()
      }
    }
  }
}
