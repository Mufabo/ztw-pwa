function showContent(id) {
  //document.getElementById("menu").style.display = "none";
  document.getElementById("meditation").style.display = "none";
  document.getElementById("settings").style.display = "none";
  document.getElementById(id).style.display = "block"; //document.body.appendChild(clon);
}

document
  .getElementById("time_limit")
  .setAttribute("value", ztwSettings.time_limit);
document
  .getElementById("time_to_timeout")
  .setAttribute("value", ztwSettings.time_to_timeout);
document
  .getElementById("dtn")
  .setAttribute("value", ztwSettings.dtn);
