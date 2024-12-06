const cursorImage = document.querySelector("#cursor-image");
const canvas = document.querySelector('.canvas');
const timer = document.querySelector('.timer');
const succes = document.querySelector('.succes');
const echec = document.querySelector('.echec');

let timeLeft = 100;
let waterLevel = 40;
let lastMouseDownPos = null;
let isMouseDown = false;
let isHandlingClick = false;

function updateEau(amount) {
  waterLevel = Math.max(0, Math.min(100, waterLevel + amount));
  document.querySelector('.niveau_eau').textContent = `${waterLevel}%`;

  if (waterLevel > 70) {
    echec.style.display = 'block';
  }
}

function updateTimer() {
  if (timeLeft > 0) {
    timeLeft--; 
    timer.textContent = `${timeLeft}s`;
  } else {
    clearInterval(timerInterval);
    succes.style.display = 'block';
  }
}

const timerInterval = setInterval(updateTimer, 1000);

canvas.addEventListener('mousedown', function(e) {
  if (isHandlingClick) return;
  isHandlingClick = true;

  cursorImage.style.display = 'block';
  lastMouseDownPos = { x: e.pageX, y: e.pageY };
  isMouseDown = true;
  posCursor(e);

  if (lastMouseDownPos) {
    const distance = 0;
    if (distance >= 30) {
      updateEau(-1);
    }
  }
});

canvas.addEventListener('mouseup', function(e) {
  cursorImage.style.display = 'none';
  if (isMouseDown && lastMouseDownPos) {
    const distance = Math.sqrt(Math.pow(lastMouseDownPos.x - e.pageX, 2) + Math.pow(lastMouseDownPos.y - e.pageY, 2));
    
    if (distance >= 30) {
      updateEau(-1);
    }
  }
  isMouseDown = false;

  setTimeout(() => {
    isHandlingClick = false;
  }, 100);
});

canvas.addEventListener('mousemove', function(e) {
  if (cursorImage.style.display === 'block') {
    posCursor(e);
  }
});

function posCursor(e) {
  cursorImage.style.left = e.pageX + 'px';
  cursorImage.style.top = e.pageY - 50 + 'px';
}

setInterval(() => {
  if (!isMouseDown) {
    updateEau(4);
  }
}, 780);
