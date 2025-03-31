import Paddle from "./paddle.js"; // Import Paddle object
import Ball from "./ball.js"; // Import Ball logic
import Ground from "./ground.js"; // Import Ball logic
import display from "./util.js"; // Import Utils logic
const Loop = {




collisionState: false, // Tracks whether the ball is currently colliding

    loop() {
       
        let ballDirection = Ball.ballDirection; // Use the ball's direction vector  // ya ya 
      //  display.game();
        const isColliding =
            Ball.ball.intersectsMesh(Paddle.leftPaddle, false) ||
            Ball.ball.intersectsMesh(Paddle.rightPaddle, false);

        const ballGroundCollision_x =  
                    Ball.ball.position.x <= Ground.x_min ||
                    Ball.ball.position.x >= Ground.x_max;
    
        const ballGroundCollision_z =  
                    Ball.ball.position.z <= Ground.z_min ||
                    Ball.ball.position.z >= Ground.z_max;


        
        if (isColliding && !this.collisionState) {
            // Collision just started
            console.log(" Paddle Colliding");
            this.collisionState = true;
            ballDirection.x *=-1;
         
        }
        if (ballGroundCollision_x && !this.collisionState) {
                // Collision just started
                console.log("ballGroundCollision_x");
                this.collisionState = true;
                ballDirection.x *=-1;
             

        } if (ballGroundCollision_z && !this.collisionState) {
            // Collision just started
            console.log("ballGroundCollision_z");
            this.collisionState = true;
            ballDirection.z *=-1;
       
        } else if (!isColliding) {
            // No collision, reset state
            this.collisionState = false;
        }

       Ball.ball.position.addInPlace(ballDirection)
    },
    paddleMovement()
    {

    //console.log("valuye : ",- g_height + (paddle_depth * 2 ))
    if (moveUpR) {
        Paddle.rightPaddle.position.z += paddleSpeed;
        
    }
    if (moveDownR){ 
        Paddle.rightPaddle.position.z -= paddleSpeed;
        
    } 
    if (moveUpL) {
        Paddle.leftPaddle.position.z += paddleSpeed;
    }
    if (moveDownL) {Paddle.leftPaddle.position.z -= paddleSpeed;}
    




    // Limit paddles within the scene (assuming ground level y = 0 and ceiling at y = 25)
    Paddle.leftPaddle.position.z  = BABYLON.Scalar.Clamp(Paddle.leftPaddle.position.z, Ground.z_min, Ground.z_max );
    Paddle.rightPaddle.position.z = BABYLON.Scalar.Clamp(Paddle.rightPaddle.position.z, Ground.z_min,Ground.z_max);
      
}
}
export default Loop;
