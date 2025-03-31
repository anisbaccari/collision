 
 / * ================= BALLS ================= */ 



 /// DIMENSION 
/*  const b_diameter = 1 ; 
 const b_pos_z= 0; // height
 const b_pos_y= b_diameter/2; // deep 
 const b_pos_x=  0; // width
 
 
 const ball  = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: b_diameter }, scene);
 
 
 
 // Initial ball movement vectors
 let ballSpeed = 0.1;
 let ballDirection = new BABYLON.Vector3(0.3, 0, 0);
 
  */

 
 const Ball = {

    ball:null
    
    , b_diameter : 1
    , b_pos_z : 6
    , b_pos_y : 0.5 // , b_diameter/2 
    , b_pos_x : 0

   
    , ballDirection : new BABYLON.Vector3(0.3,0, 0.1)
    , b_left_bound_x: 0
    , b_right_bound_x: 0 

    ,position:null,

    init(scene) {
        // Ball dimensions
/*          this.b_diameter = 1;
         this.b_pos_z = 0;
         this.b_pos_y = this.b_diameter / 2;
         this.b_pos_x = 0; */

        const ball = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: this.b_diameter }, scene);

// Initial ball movement vectors

/*         // Ball boundaries
        const b_left_bound_x = 0;
        const b_right_bound_x = 0; */

        this.position = new BABYLON.Vector3(this.b_pos_x, this.b_pos_y, this.b_pos_z);

        // Create a shadow generator
        const light = new BABYLON.DirectionalLight("dirLight", new BABYLON.Vector3(-1, -2, -1), scene);
        const shadowGenerator = new BABYLON.ShadowGenerator(1024, light);
        shadowGenerator.addShadowCaster(ball);
        ball.position = this.position;
        this.ball = ball;
    },
};

export default Ball;