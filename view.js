function showContent(id) {
    document.getElementById("menu").style.display = "none";
    document.getElementById("meditation").style.display = "none";
    document.getElementById("settings").style.display = "none";
    document.getElementById(id).style.display = "block"; //document.body.appendChild(clon);
  }
  