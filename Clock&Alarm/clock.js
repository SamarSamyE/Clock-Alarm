function clock(){
var d = new Date();
// to detemine which day
var day=d.getDay();
if(day===0){
    document.getElementById("sun").style.color="red";
}
if(day===1){
    document.getElementById("mon").style.color="red";
}
if(day===2){
    document.getElementById("tue").style.color="red";
}
if(day===3){
    document.getElementById("wed").style.color="red";
}
if(day===4){
        document.getElementById("thu").style.color="red";
}
if(day===5){
    document.getElementById("fri").style.color="red";
}
if(day===6){
    document.getElementById("sat").style.color="red";
}
// get the values of current time
let hour=d.getHours();
let minute=d.getMinutes();
let seconds=d.getSeconds();
let zone="AM";
// to convert from 24 hourss to 12 hours 
if(hour>12){
    hour=hour-12;
    zone="PM";
}
if(hour===12){
    zone="PM";  
}
if(hour===24){
    hour=0;
    zone="AM";
}
// add zero before unary number
if(hour<10){hour="0"+hour;}
if(minute<10){minute="0"+minute;}
if(seconds<10){seconds="0"+seconds;} 
let time=hour+": "+minute+": "+seconds+" "+zone;
// put the values in the clock div
document.getElementById("clock").innerText=time;
// to run every sec 
let currentTime=setTimeout(function(){clock()},1000);
}
clock();