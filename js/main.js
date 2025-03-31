import Paddle from "./paddle.js"; // Import Paddle object
import Ball from "./ball.js"; // Import Ball logic
import Ground from "./ground.js"; // Import Ground object
import Loop from "./loop.js"


// BASED ELEMENT
const canvas  = document.getElementById('renderCanvas'); 
const engine = new BABYLON.Engine(canvas); 
let isRendering = true;

const createScene = function(){

    const scene = new BABYLON.Scene(engine);
    
    // Create a free camera and position it
   
    
    const camera = new BABYLON.ArcRotateCamera(
      "camera1", 
     - Math.PI /2, // Alpha (rotation around Y-axis)
     - Math.PI , // Beta (rotation around X-axis, top-down view)
      150,          // Radius (distance from the target)
      new BABYLON.Vector3(0, 0, 0), // Target (center of the ground)
      scene
         );

    camera.setTarget(BABYLON.Vector3.Zero());
  //  camera.attachControl(canvas, true);
    camera.inputs.removeByType("FreeCameraKeyboardMoveInput"); 
    camera.inputs.addMouseWheel();
    
    // Add a hemispheric light
    const light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.3;

    // Initialize ground
    Ground.init(scene);
    let paddle_pos = Ground.getWidth();
   
    // Initialize paddles
     Paddle.init(scene, paddle_pos);

    // init ball 
    Ball.init(scene);

   return scene;
     
}

const scene = createScene(); 

 engine.runRenderLoop(function(){
    if(isRendering)
        scene.render();
 });

 window.addEventListener('resize', function(){
    engine.resize();


 });
 window.addEventListener("keydown", (event) => {
   if (event.key === "p") { //  pause/unpause
       isRendering = !isRendering;
       console.log(isRendering ? "Rendering resumed!" : "Rendering paused!");
   }
});


 // Main logic Game 
scene.onBeforeRenderObservable.add(() => {
   Loop.loop()

});
