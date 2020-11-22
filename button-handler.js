function nuclearMissleReady() {
  playSound('http://www.hazmatt.net/gaming/starcraft/terran/units/advisor/tadupd07.wav');
}

function nuclearLaunchDetected() {
  playSound('http://www.hazmatt.net/gaming/starcraft/terran/units/advisor/tadupd04.wav');
}

function medicDidSomeonePageMe() {
  playSound('http://www.hazmatt.net/gaming/starcraft/terran/units/medic/tmdwht01.wav');
}

function ghostSomebodyCallForAnExterminator() {
  playSound('http://www.hazmatt.net/gaming/starcraft/terran/units/ghost/tghrdy00.wav');
}

//http://www.hazmatt.net/gaming/starcraft/terran/units/ghost/tghrdy00.wav

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
