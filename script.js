let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let highScore = 0;

let btns = ["yellow", "red", "purple", "green"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
  if(started == false){
    console.log("game is started");
    started = true;

    levelUp();
  }
});

function userFlash (btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  }, 250);
}

function userFlash (btn){
  btn.classList.add("userflash");
  setTimeout(function(){
    btn.classList.remove("userflash");
  }, 250);
}


function levelUp(){
  userSeq = [];
  level++
  if(level > highScore){
    highScore = level;
  }
  h2.innerText = `level: ${level} - highscore: ${highScore}`;
  h2.innerText = `level ${level}`;

  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`)
  gameSeq.push(randColor);
  console.log(gameSeq)
  userFlash(randBtn);
}

function checkAns(idx){
  if (userSeq[idx] == gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp,1000)
    }
  } else {
    h2.innerHTML = `Game Over! Your score: <b>${level}</b> - Highscore: 
    ${highScore}<br>Press Any Key to Restart`;

    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor="white";
    }, 150);
    reset()
  }

}


function btnPress(){
  let userColor = this.getAttribute("id");
  console.log(userColor);
  // console.log(this)
  let btn = this;
  userFlash(btn);
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}



let allBtn = document.querySelectorAll(".btn");
for (let btn of allBtn){
  btn.addEventListener("click",btnPress);
}


function reset(){
  started = false;
  userSeq = [],
  gameSeq = [],
  level = 0;  

};