/*const themeModule = {

init: function () {

  //* La même chose mais en localStorage
  const defaultTheme = localStorage.getItem('dark-mode');
  
  if(defaultTheme != null){
      themeModule.switchTheme(defaultTheme);
  }

  if (defaultTheme === 'dark') {
      themeModule.toggleDarkMode();
  }
}
}  */

function toggleDarkMode() {
  let element = document.body;
  element.classList.toggle("dark-mode");
    if (element.classList.contains("dark-mode")) {
  localStorage.setItem("darkModeEnabled", "true");
} else {
  localStorage.setItem("darkModeEnabled", "false");
} console.log(localStorage);
}

function toggleButtonHover() {
  let element = document.querySelector('button');
  element.classList.toggle("hover");
}

function toggleButtonDelay() {
  let element = document.querySelector('button');
  element.classList.add("button-delay");
  setTimeout(function () {
    element.classList.remove("button-delay");
  }, 5000);
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




