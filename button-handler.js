const starcraftBaseURL = 'http://www.hazmatt.net/gaming/starcraft/';

function nuclearMissleReady() {
  playSound(`${starcraftBaseURL}terran/units/advisor/tadupd07.wav`);
}

function nuclearLaunchDetected() {
  playSound(`${starcraftBaseURL}terran/units/advisor/tadupd04.wav`);
}

function medicDidSomeonePageMe() {
  var x = document.getElementById("myAudio"); 
  x.play();
}

function ghostSomebodyCallForAnExterminator() {
  playSound(`${starcraftBaseURL}terran/units/ghost/tghrdy00.wav`);
}

function actionClicked() {
  setEventButtonsActiveStatus(true);
}

function setEventButtonsActiveStatus(buttonStatus) {
  for (const element of document.querySelector('.event-buttons').children) {
    element.disabled = !buttonStatus;
  }  
}

function playSound(url) {
  var a = new Audio(url);
  a.play();

  setEventButtonsActiveStatus(false);
}
