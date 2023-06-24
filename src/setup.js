

// Initialize the game
function init() {
    canvas = document.getElementById("gameCanvas");
    canvas.addEventListener("mousemove", updateMousePos);
    canvas.addEventListener("click", updateMousePos);
    ctx = canvas.getContext("2d");
    requestAnimationFrame(gameLoop);
}

// Main game loop
let secondsPassed;
let oldTimeStamp;
let fps;

function gameLoop(timeStamp) {
    
    var msPassed = 0;
    if (oldTimeStamp) {
      msPassed = timeStamp - oldTimeStamp;
    }
    var secondsPassed = msPassed / 1000;
    oldTimeStamp = timeStamp;
    var fps = Math.round(1 / secondsPassed);


    msPassed = Math.min(msPassed,200)

    update(msPassed);
    draw(fps);

    requestAnimationFrame(gameLoop);
}


// Initialize the game
init();