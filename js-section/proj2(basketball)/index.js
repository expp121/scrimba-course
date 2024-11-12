let scoreHomeEl = document.getElementById("score-home");
let scoreGuestEl = document.getElementById("score-guest");
let timeEl = document.getElementById("timer");
let scoreHome = 0;
let scoreGuest = 0;

let minutes = 12
let sec = 1

let interval = setInterval(updateTimer,1000);

function add(team, score){
    if(team === "home"){
        console.log("score for home")
        scoreHome += score;
        scoreHomeEl.textContent = scoreHome;
    }else{
        console.log("score for guest")
        scoreGuest += score;
        scoreGuestEl.textContent = scoreGuest;
    }
}

function reset(){
    scoreHome = 0;
    scoreGuest = 0;
    scoreHomeEl.textContent = 0;
    scoreGuestEl.textContent = 0;
    minutes = 12;
    sec = 0;
    clearInterval(interval)
    interval = setInterval(updateTimer,1000);
}

function updateTimer(){
    sec--;
    if(sec < 0){
        minutes--
        sec = 59
    }
    timeEl.textContent = String(minutes).padStart(2, '0') + ":" + String(sec).padStart(2, '0');
    if (minutes == 0 && sec == 0){
        clearInterval(interval)
    }
}