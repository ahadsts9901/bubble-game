var score = 0;
var timer = 60;
var number = document.getElementById("hit");
var bottom = document.getElementById("bottom");
var ran;

function bubbles() {
  for (var i = 1; i <= 112; i++) {
    ran = Math.floor(Math.random() * 10);
    bottom.innerHTML += `<div class="bbl" id="bbl">${ran}</div>`;
  }
}
bubbles();

function hit() {
  number.innerHTML = Math.floor(Math.random() * 10);
}
hit();

function timeOut() {
  var timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
    } else {
      clearInterval(timerInt);
      document.getElementById(
        "bottom"
      ).innerHTML = `<center class="flex flex-col justify-center items-center"><h2>Game Over<h2/><br/><h2>Your score is ${score}<br/><a href="./index.html" class="text-[#e7008a]">CLick Here To Play Again</a><center/>`;
    }
    document.getElementById("timer").innerHTML = timer;
  }, 1000);
}
timeOut();

function increaseScore() {
  score += 10;
  document.getElementById("score").textContent = score;
}

document.getElementById("bottom").addEventListener("click", (e) => {
  if (e.target.textContent == number.textContent) {
    hit();
    increaseScore();
    bottom.innerHTML = "";
    bubbles();
  }
});