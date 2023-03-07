


//Mobile Nav Bar

// Get a reference to the button element
var button = document.querySelector('.nav-button-mobile');

var navList = document.querySelector('.nav-list');

// Check if the button element exists
if (button) {
  // Simulate a click event on the button element
  button.click();
  button.addEventListener("click", () => {
    navList.classList.toggle('open');
    console.log("this was clicked");
    
  });
}
