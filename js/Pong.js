import Paddle from "./paddle.js"; // Import Paddle object
import Ball from "./ball.js"; // Import Ball logic
import Ground from "./ground.js"; // Import Ground object
import Loop from "./loop.js";



class Pong {

    constructor(scene)
    {
        this.scene = scene; 
        this.paddle = null ;
        this.ball = null; 
        this.ground =  null; 
    }

    init()
    {
        Ground.init(this.scene);
        this.ground = Ground; 
        
        const groundWitdh = Ground.getWidth();

        Paddle.init(this.scene,groundWitdh); 
        this.paddle = Paddle; 

        Ball.init(this.scene); 
        this.ball = Ball;        
    }

}

export default Pong;