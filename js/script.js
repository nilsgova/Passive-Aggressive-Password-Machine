var randomText = [
  "Really, you call that! a password?",
  "Do you even know what a password is!?",
  "Worst. Password. Ever.",
  "I need a password not this monstrosity.",
  "Really poor effort.",
  "I'm not angry, just disappointed.",
  "Try harder, bub",
  "This is pretty pathetic",
  "May god have mercy on your email account.",
  "Don't come crying to me when you're hacked.",
  "I hope this account isn't important.",
  "This password needs more emoji.",
  "Todlers eat passwords like yours for breakfast",
  "Mashing your head on the keyboard would be more secure",
  "Are you taking this seriously?",
  "I've seen dogs with better passwords.",
  "Perhaps this was good 10 years ago.",
  "I worry about you.",
  "You lack creativity.",
  "Oh... you're going to use that huh?",
  "You might aswell use 1234",
  "Weak. Just weak.",
  "Sorry chump, this just won't do.",
]
// get input element
let password = document.getElementById("password");
// add event listener
password.addEventListener('keyup', changeText);


function changeText() {
// Get random quote from array RandomText  
  var Random = randomText[Math.floor(Math.random()*randomText.length)];
 // change the H2 text to new random quote
  let changeMe = document.getElementById("changeMe"); 
  changeMe.innerHTML = Random;
}