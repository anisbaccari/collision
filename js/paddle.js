

/ * ================= PADDLES ================= */ 

/* 
    //// COLORS 
    const paddle_colors = [  
        new BABYLON.Color3.Red(), // Red
        new BABYLON.Color3.Red(), // Red
        new BABYLON.Color3.Red(), // Red
        new BABYLON.Color3.Red(), // Red
        new BABYLON.Color3.Red(), // Red
        new BABYLON.Color3.Red(), // Red
    ];
    
        //// DIMENSION
    const paddle_width = 1; 
    const paddle_height = 1; 
    const paddle_depth = 10; 
    const l_paddle_pos_x =   (- g_width / 2 ) + (paddle_width/ 2 );
    const r_paddle_pos_x =   ( g_width / 2 ) - (paddle_width/ 2 ); 
    const r_paddle_bound_x = ( g_width / 2 ) - (paddle_width ); 
    const l_paddle_bound_x = (- g_width / 2 ) + (paddle_width ); 
    
    
        //// OPT
    
    const paddle_opt = {
        width: paddle_width, 
        height:paddle_height,
        depth:paddle_depth,
        faceColors: paddle_colors
    };
    
    
        /// POSITION 
    const l_paddle = BABYLON.MeshBuilder.CreateBox("left paddle",paddle_opt,scene);
    l_paddle.position = new BABYLON.Vector3( l_paddle_pos_x, 0, 0); 
    
    const r_paddle = BABYLON.MeshBuilder.CreateBox("Right paddle",paddle_opt,scene);
    r_paddle.position = new BABYLON.Vector3(r_paddle_pos_x, 0,0); 
   
 */



const Paddle = {
        // COLORS
        colors: [
            new BABYLON.Color3.Red(), // Red
            new BABYLON.Color3.Red(), // Red
            new BABYLON.Color3.Red(), // Red
            new BABYLON.Color3.Red(), // Red
            new BABYLON.Color3.Red(), // Red
            new BABYLON.Color3.Red(), // Red
        ],
    
        // DIMENSIONS
        width: 1,
        height: 1,
        depth: 10,
        // Store paddles
        leftPaddle: null,
        rightPaddle: null,
        // Position Calculation Method
        getPositions(g_width) {
            return {
                left: (-g_width / 2) + (this.width / 2),
                right: (g_width / 2) - (this.width / 2),
                leftBound: (-g_width / 2) + this.width,
                rightBound: (g_width / 2) - this.width
            };
        },
    
        // Create Paddle Method
        createPaddle(name, positionX, scene) {
            const paddleOpt = {
                width: this.width,
                height: this.height,
                depth: this.depth,
                faceColors: this.colors
            };
    
            const paddle = BABYLON.MeshBuilder.CreateBox(name, paddleOpt, scene);
            paddle.position = new BABYLON.Vector3(positionX, 0, 0);
            return paddle;
        },
    
        // Initialize both paddles
        init(scene, g_width) {
            const positions = this.getPositions(g_width);
           
                this.leftPaddle  = this.createPaddle("Left Paddle", positions.left, scene),
                this.rightPaddle  = this.createPaddle("Right Paddle", positions.right, scene)
           
        }
    };
    export default Paddle;