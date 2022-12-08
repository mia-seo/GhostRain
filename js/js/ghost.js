function createGhost() {
  const ghostElement = document.createElement("div");
  const ghostStyle = ghostElement.style;
  ghostStyle.position = "absolute";

  ghostStyle.top = "0px";

  let randomLeft = randomNum(0, BG_WIDTH - GHOST_WIDTH);
  ghostStyle.left = randomLeft + "px";

  ghostStyle.width = GHOST_WIDTH + "px";
  ghostStyle.height = GHOST_HEIGHT + "px";
  ghostStyle.background = 'url("./images/ghost.png") no-repeat';

  bgElement.appendChild(ghostElement);

  setInterval(() => {
    // 1. 고스트 요소 접근
    // 고스트 요소에 접근하려면 1)ghostElement를 전역으로 빼거나 2)setInterval을 블록안에 넣어야 한다.
    // 2. top 가져오기 + 숫자 추출 + 10px
    let ghostTopNum = Number(ghostElement.style.top.split("px")[0]) + 10;
    let ghostLeftNum = Number(ghostElement.style.left.split("px")[0]);
    const heroLeft = Number(getComputedStyle(heroElement).left.split("px")[0]);
    // 3. if문 배경에 닿으면 멈추기
    if (ghostTopNum >= BG_HEIGHT - GHOST_HEIGHT) {
      ghostElement.remove();
      return;
    }
    // 4. 다시 할당
    ghostElement.style.top = ghostTopNum + "px";
    // 5. 유령과 용사가 겹치는 위치 찾아서 조건문 생성
    if (ghostTopNum > BG_HEIGHT - (GHOST_HEIGHT + HERO_HEIGHT)) {
      if (ghostLeftNum + GHOST_WIDTH > heroLeft && ghostLeftNum < heroLeft) {
        die(ghostElement);
      }
    }

    let setTime = document.getElementById("setTime");
    let count = 9;
    count--;
  }, 100);
}

function randomNum(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

let killedGhostCounter = 0;
function die(ghostElement) {
  ghostElement.style.backgroundPosition = "-45px";
  killedGhostCounter += 1;
  killedGhost.innerHTML = killedGhostCounter;
  const soundEffect = new Audio("./audio/dying.wav");
  soundEffect.play();
  console.log(killedGhostCounter);
}

let ghostRainId = null;

function startRain() {
  ghostRainId = setInterval(createGhost, 1000);
  const bgm = new Audio("./audio/bgm.mp3");
  bgm.play();
  setTimeout(() => bgm.pause(), 11000);
  killedGhost.innerHTML = 0;
}

function stopRain() {
  setTimeout(() => clearInterval(ghostRainId), 7000);
}

function timer() {
  let counter = 9;
  setInterval(() => {
    if (counter >= 0) {
      timeOut.innerHTML = counter--;
    }
  }, 1000);
}
