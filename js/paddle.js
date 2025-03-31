

/ * ================= PADDLES ================= */ 




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