function meditate() {
  if (timerIsRunning) {
    if (nextSideLeft) {
      // the next side to be clicked is left
      if (lastSideClicked == "left") {
        lastSideClicked = null; // reset
        // left side was clicked correctly
        console.log("left correct");
        if (counter < settings.dtn) {
          // single tap expected
          counter++; // increase the counter to dtn
          nextSideLeft = false; // next tap is expected on the right side
        } else {
          // left side is to be clicked twice
          console.log("double!!!")
          if (!double_counter) {
            // first of double counter
            // nextSideLeft is true
            // counter == dtn
            double_counter = true;
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
        counter = 1;
        lastSideClicked = null;
      }
    } else {
      // next side to be clicked is right
      if (lastSideClicked == "right") {
        // right side was clicked correctly
        console.log("right correct");
        lastSideClicked = null;
        if (counter < settings.dtn) {
          // single tap expected
          counter++;
          nextSideLeft = true;
        } else {
          console.log("double!!!")
          if (!double_counter) {
            double_counter = true;
          } else {
            counter = 1;
            double_counter = false;
            nextSideLeft = true;
          }
        }
      } else {
        console.log("error. You clicked left instead of right");
        counter = 1;
        lastSideClicked = null;
      }
    }
  }
}