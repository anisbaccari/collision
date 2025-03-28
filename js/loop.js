import Paddle from "./paddle.js"; // Import Paddle object
import Ball from "./ball.js"; // Import Ball logic

 const Loop = {


     check()
{

            //// X' axis
    if (ball.position.x >= b_left_bound_x   || ball.position.x <= b_right_bound_x )
        return true; 
    else 
        return false;
}, 

 loop()
{
    let ball_vec  = new BABYLON.Vector3(0.3, 0, 0);
    //   Ball.ball.position.addInPlace(ball_vec);
       if(Ball.ball.position.x <=  Paddle.leftPaddle.position.x ||
           Ball.ball.position.x <= Paddle.rightPaddle.position.x
        )
        console.log("///////////////////////////////");
   
}
}
export default Loop;



