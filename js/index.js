
// Get a reference to the button element
var allButton = document.querySelector('.select-all');
var webButton = document.querySelector('.select-web');
var mobileButton = document.querySelector('.select-mobile');
var cicdButton = document.querySelector('.select-cicd');
var cards = document.querySelectorAll('.skill-card');

var button = document.querySelector('.nav-button-mobile');
var navList = document.querySelector('.nav-list');

var customBorderButtom = "2px solid #00C1FF";


function init(){
  allButton.style.borderBottom = customBorderButtom;
}

init();
// Check if the button element exists
if (button) {
  // Simulate a click event on the button element
  button.click();
  button.addEventListener("click", () => {
    navList.classList.toggle('open');    
    console.log("this was clicked");
    
  });
}


allButton.addEventListener('click', function() {
  clearAllBorderBottom();
  allButton.style.borderBottom = customBorderButtom;
  cards.forEach(function(card) {    
    card.style.display = 'flex';
  });
});

webButton.addEventListener('click', function() {
  clearAllBorderBottom();
  webButton.style.borderBottom = customBorderButtom;

  cards.forEach(function(card) {
    if (card.classList.contains('web')) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
});

mobileButton.addEventListener('click', function() {
  clearAllBorderBottom();
  mobileButton.style.borderBottom = customBorderButtom;
  cards.forEach(function(card) {
    if (card.classList.contains('mobile')) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
});

cicdButton.addEventListener('click', function() {
  clearAllBorderBottom();
  cicdButton.style.borderBottom = "2px solid #00C1FF";

  cards.forEach(function(card) {
    if (card.classList.contains('cicd')) {
      card.style.display = 'flex';            
    } else {
      card.style.display = 'none';
    }
  });
});

function clearAllBorderBottom() {
  allButton.style.borderBottom = "";
  webButton.style.borderBottom = "";
  mobileButton.style.borderBottom = "";
  cicdButton.style.borderBottom = "";
}


