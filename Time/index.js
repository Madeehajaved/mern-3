const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const resetBtn = document.querySelector("#resetBtn");


let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;

let intervalid;
let hrs = 0;
let mins = 0;
let secs = 0;
startBtn.addEventListener("click",() => {

});
resetBtn.addEventListener("click",() => {});
function updateTime(){
    elapsedTime = Date.now() - startTime;

    secs = Math.floor((elapsedTime / 1000) % 60);
    mins= Math.floor((elapsedTime / (1000 * 60)) % 60);
}