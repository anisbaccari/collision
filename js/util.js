import Paddle from "./paddle.js"; // Import Paddle object
import Ball from "./ball.js"; // Import Ball logic
import Ground from "./ground.js"; // Import Ground object





const display =  {

    game(){

        console.log("Ball position: ",Ball.ball.position.x,
        " left paddle : ",Paddle.leftPaddle.position.x," right paddle :",Paddle.rightPaddle.position.x,);
        Ground.getBounderies();
    }
}
export default display;