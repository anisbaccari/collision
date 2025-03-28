window.addEventListener("keydown", (event) => {
    if (event.key === "p") { // Press 'p' to pause/unpause
        isRendering = !isRendering;
        console.log(isRendering ? "Rendering resumed!" : "Rendering paused!");
    }
});