
/ * ================= GROUND ================= */


/* 
// Create a ground 


 */

const Ground = {
    width: 50,
    height: 30, // Babylon.js uses "height" for ground, not depth 
    z_min: -15,
    z_max: 15, 
    x_min: -25, 
    x_max:25,


    groundMesh: null,

    // Initialize the ground
    init(scene) {
        if (this.groundMesh) return; // Prevent duplicate creation

        const options = { width: this.width, height: this.height };
        this.groundMesh = BABYLON.MeshBuilder.CreateGround("ground", options, scene);

        // Create a material for the ground
        const groundMaterial = new BABYLON.StandardMaterial("groundMaterial", scene);
        groundMaterial.diffuseColor = new BABYLON.Color3.Green(); // Green ground
        this.groundMesh.material = groundMaterial;

        // Ensure the ground receives shadows
        this.groundMesh.receiveShadows = true;
    },
    getWidth()
    {
        return this.width;
    },
    getheight()
    {
        return this.height;
    },
    getBounderies()
    {
        console.log("z_min: ",this.z_min," z_max: ",this.z_max,
            "\nx_min:",this.x_min, "x_max: ",this.x_max);
    }
};

// Export the Ground object
export default Ground;