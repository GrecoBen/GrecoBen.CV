function toggleDarkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
  }

  function toggleButtonHover() {
    var element = document.getElementsByClassName("button");
    element.classList.toggle("hover");
  }

  function toggleButtonDelay() {
    var element = document.getElementsByClassName("button");
    element.classList.add("button-delay");
    setTimeout(function() {
      element.classList.remove("button-delay");
    }, 2000); 
  }

  function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var divs = document.getElementsByTagName("div");
    for (var i = 0; i < divs.length; i++) {
      divs[i].classList.toggle("dark-mode-div");
    }
  }