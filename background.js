var isStarted = false;
var intervalId;
var counter;

chrome.action.setBadgeBackgroundColor({color: '#adb5bd'});

chrome.action.onClicked.addListener((tab) => {
  isStarted ? stopTimer() : startTimer();
});

function startTimer() {
  counter = 0;
  intervalId = setInterval(function () { count(); }, 1000);
  isStarted = true;
}

function stopTimer() {
  clearInterval(intervalId);
  isStarted = false;
}

function count() {
  chrome.action.setBadgeText({ text: String(++counter) });
}