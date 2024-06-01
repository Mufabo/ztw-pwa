function showContent(id) {
  //document.getElementById("menu").style.display = "none";
  document.getElementById("meditation").style.display = "none";
  document.getElementById("settings").style.display = "none";
  document.getElementById("instructions").style.display = "none";
  document.getElementById(id).style.display = "block"; //document.body.appendChild(clon);
}

function onLoadOfSettings() {
  document
    .getElementById("time_limit")
    .setAttribute("value", ztwSettings.time_limit);
  document
    .getElementById("time_to_timeout")
    .setAttribute("value", ztwSettings.time_to_timeout);
  document.getElementById("dtn").setAttribute("value", ztwSettings.dtn);
  document.getElementById("cascade").setAttribute("value", ztwSettings.cascade);
}

var timer = document.getElementById("timer");
timer.innerText = `Start: ${ztwSettings.time_limit}`;

document.getElementById("manual").innerText = `
Before starting, take a comfortable position.

Hit start and , if you want to, close your eyes.

Observe your breath.

After each completed breath, tap the screen on one site or press the f key for left and the j key for right. 
The starting site is on the right. 
Then after the next breath tap the other site.

At every DTN-th breath, do a double tap. DTN stands for double tap number. The default for DTN is 5.

Lets do an example.

    You take your first breath -> single tap on the right half of the screen.
    Second Breath -> single tap left site.
    Third Breath -> single tap right site.
    Fourth Breath -> single tap left site
    Fifth Breath -> tap TWICE on the right site

Restart counting, this time starting with the left site. Repeat for the rest of the duration.

Mistakes will reset the counter. For example:

    You take your first breath -> single tap on the right half of the screen.
    Second Breath -> single tap left site.
    Third Breath -> single tap wrongly left site again.
    Start counting from one again -> single tap right site.

Missing to tap within a certain time (default 30 seconds) will also reset the counter and beep until you tap on the correct site. This is for bringing your focus back when your mind wanders. Don't worry when this happens, and it will happen ! Noticing your focus has shifted and bringing it back to your breath is an essential part of meditation. 
`