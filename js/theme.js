function toggleDarkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
  }

  function toggleButtonHover() {
    let element = document.getElementsByClassName("button");
    element.classList.toggle("hover");
  }

  function toggleButtonDelay() {
    let element = document.getElementsByClassName("button");
    element.classList.add("button-delay");
    setTimeout(function() {
      element.classList.remove("button-delay");
    }, 2000); 
  }

  function toggleDarkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
    let divs = document.getElementsByTagName("div");
    for (let i = 0; i < divs.length; i++) {
      divs[i].classList.toggle("dark-mode-div");
    }
    let button = document.querySelector("button");
  if (element.classList.contains("dark-mode")) {
    button.style.backgroundColor = "white";
  } else {
    button.style.backgroundColor = "black";
  }
  }