let scoreEl = document.getElementById("homeScore")
let guestEl = document.getElementById("guestScore")

let hScore = 0
let gScore = 0
let time = 600 // 10 minutes in seconds
let period = 1
let finalperiod = 4 //Number of periods
let winningScore = 100 //score to win the game
let interval;


function updateHomeScore() {
    hScore = hScore + 1
    scoreEl.textContent = hScore 
  
}

function updateHomeScore2() {
    hScore = hScore + 2
    scoreEl.textContent = hScore

}

function updateHomeScore3() {
    hScore = hScore + 3
    scoreEl.textContent = hScore
  
}

function updateGuestScore() {
    gScore = gScore + 1
    guestEl.textContent = gScore
  
}

function updateGuestScore2() {
    gScore = gScore + 2
    guestEl.textContent = gScore
  
}

function updateGuestScore3() {
    gScore = gScore + 3
    guestEl.textContent = gScore

}

let gameInterval; // To store the interval ID

function newGame() {
  const gameData = {
    hScore: 0,
    gScore: 0,
    time: 600,
    period: 1,
  
  };

  document.getElementById("timer-time").textContent = formatTime(gameData.time);
  document.getElementById("period").textContent = " " + gameData.period;
  document.getElementById("homeScore").textContent = gameData.hScore;
  document.getElementById("guestScore").textContent = gameData.gScore;

  clearInterval(gameInterval); // Clear any existing interval
  gameInterval = setInterval(() => {
    gameData.time--;
    document.getElementById("timer-time").textContent = formatTime(gameData.time);
    if (gameData.time <= 0) {
      // Game over logic here
      clearInterval(gameInterval);
      alert("Time's up!");
      // Reset game state or start a new game
    }
  }, 1000);
}

function formatTime(time) {
    let minutes = Math.floor(time / 60)
    let seconds = time % 60
    return `${minutes}: ${seconds.toString().padStart(2, '0')}`
}

function endPeriod() {
    period++

    document.getElementById("period").textContent = "period:" + period
    time = 600 // reset time for new period

    document.getElementById("timer-time").textContent = formatTime(time)
    

  }
