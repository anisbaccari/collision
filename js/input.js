// Adjust speed
const paddleSpeed = 0.5; 
// move 
let moveUpL = false, moveDownL = false, moveUpR = false, moveDownR = false;

// Key Press (Start Movement)
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case "w": case "W": moveUpR = true; console.log("dsdfsd"); break;
        case "s": case "S": moveDownR = true;console.log("dsdfsd"); break;
        case "ArrowUp": moveUpL = true; break;
        case "ArrowDown": moveDownL = true; break;
    }
});

// Key Release (Stop Movement)
window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case "w": case "W": moveUpR = false; break;
        case "s": case "S": moveDownR = false; break;
        case "ArrowUp": moveUpL = false; break;
        case "ArrowDown": moveDownL = false; break;
    }
});



