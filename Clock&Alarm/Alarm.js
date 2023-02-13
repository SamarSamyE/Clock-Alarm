var sound = new Audio("mixkit-rooster-crowing-in-the-morning-2462.wav");
sound.loop = true;
function alarmSet() {
var date = new Date();
// to get the time now at setting the alarm 
var hours = parseInt(date.getHours());
var minutes = parseInt(date.getMinutes());
var seconds = parseInt(date.getSeconds());
let currentTime=hours+":"+minutes+":"+seconds;
console.log('curTime:' + currentTime);
// to get the value of time you want the alarm paly after
var hr =  parseInt(document.getElementById('afterHrs').value);
var min =  parseInt(document.getElementById('afterMins').value);
var sec =  parseInt(document.getElementById('afterSecs').value);
// collect the 2 times and put it as the alarmTime
var h=hr+hours;
var m=min+minutes;
var s=sec+seconds;
let alarmTime=h+":"+m+":"+s;
console.log('alarmTime:' + alarmTime);
// after set the alarm make it disable.
document.getElementById('afterHrs').disabled = true;
document.getElementById('afterMins').disabled = true;
document.getElementById('afterSecs').disabled = true;

// het the current time & when the current time and alarm time is equal then play the sound. 
setInterval(function(){
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
let currentTime=hours+":"+minutes+":"+seconds;
	if (alarmTime == currentTime) {
		sound.play();
  }
},1000);
}
// to clear the alarm make the sound stop and the disable false
function alarmClear() {
	document.getElementById('afterHrs').disabled = false;
	document.getElementById('afterMins').disabled = false;
	document.getElementById('afterSecs').disabled = false;
	sound.pause();
}