const emailLink = document.querySelector("contact");
emailLink.addEventListener("click", function(event) {
  event.preventDefault(); 
  setTimeout(function() {
    window.location.href = emailLink.href; 
  }, 3000); 
});


  
  