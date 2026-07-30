const answers = [
"Whatsapp pr hi bat hovi thi apki ❣️",
"❣️",
"Insan",
"Achi Bat krny ka tarika",
"10000000000000000000% 😁",
"Sub acha lagta h",
"Phehly btaoo kio choro gy mujy  🥺🥹",
"Absolutely",
"Nooriii & Sakoon 😁❣️",
"Sure U  can reply me answer me in status ❤️"
];

const ids=[
"q1","q2","q3","q4","q5",
"q6","q7","q8","q9","q10"
];

let currentInput=0;

function startTyping(){

if(currentInput>=ids.length) return;

let input=document.getElementById(ids[currentInput]);
let text=answers[currentInput];

input.value="";

let i=0;

let spamTyping=setInterval(()=>{

input.value+=text.charAt(i);

i++;

if(i>=text.length){

clearInterval(spamTyping);

currentInput++;

setTimeout(startTyping,200);

}

},15);

}

window.onload=startTyping;